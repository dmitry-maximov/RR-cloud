const { File } = require("../models/index");
const fs = require("fs");
const path = require("path");
const ErrorHandler = require("../handlers/errorHandlers");
const FileDto = require("../dtos/fileDto");
const Sequelize = require("sequelize");
const diskService = require("./diskService");
const Op = Sequelize.Op;

class FileService {
  getPath(file, uuid) {
    const dirPath = path.dirname(__dirname);
    return path.join(
      dirPath,
      "/files",
      `${uuid}`,
      `${file.path.replace(`\\`, `/`)}`
    );
  }

  createDirectoryForFile(file) {
    const filePath = this.getPath(file, file.uuid);

    return new Promise((resolve, reject) => {
      try {
        if (!fs.existsSync(filePath)) {
          fs.mkdirSync(filePath);
          return resolve({ message: "Файл успешно создан" });
        } else {
          return reject(ErrorHandler.internalServer("Файл уже существует"));
        }
      } catch (e) {
        throw ErrorHandler.internalServer(
          "Ошибка при создании каталога на сервере"
        );
      }
    });
  }

  async createDirectory(name, type, parent, user) {
    const file = new FileDto({
      userId: user.id,
      type: type,
      parent: parent,
      uuid: user.uuid,
      name: name,
    });

    const parentFile = parent
      ? await File.findOne({ where: { id: parent } })
      : null;
    if (!parentFile) {
      file.path = name;
      await this.createDirectoryForFile(file);
    } else {
      file.path = `${parentFile.path}\\${file.name}`;
      await this.createDirectoryForFile(file);

      // TO DO:
      // 1. Добавить таблицу для связывания 1 ко многим для чилдов (id childId fileId)
      // 2. Сохранять ссылку на file в таблицу связи
      // 3. Обновить у parentFile ссылку на child
    }
    const savedFile = await File.create(file);
    return savedFile;
  }

  async getFiles(userId, parent = null, sort = "asc") {
    let files = await File.findAll({
      where: { userId: userId, parent: parent, isTrash: false },
      order: [["name", sort]],
    });
    return files;
  }

  async uploadFile(file, user, parent) {
    const dirPath = path.dirname(__dirname);
    const parentFile = parent
      ? await File.findOne({ where: { id: parent } })
      : null;

    const hasFreePlace = await diskService.checkFreePlace(user.id, file.size);
    if (!hasFreePlace) {
      throw ErrorHandler.badRequest("Свободное место на диске закончилось.");
    }

    let filePath;
    if (parentFile) {
      filePath = path.join(
        dirPath,
        "/files",
        `${user.uuid}`,
        `${parentFile.path}`,
        `${file.name}`
      );
    } else {
      filePath = path.join(dirPath, "/files", `${user.uuid}`, `${file.name}`);
    }

    if (fs.existsSync(filePath)) {
      throw ErrorHandler.badRequest("Файл уже существует");
    }

    file.mv(filePath);

    const type = file.name.split(".").pop();
    let fpath = file.name;
    if (parent) {
      fpath = parentFile.path + "\\" + file.name;
    }

    const savedFileDto = new FileDto({
      name: file.name,
      type,
      size: file.size,
      path: fpath,
      parent: parentFile?.id,
      userId: user.id,
    });

    const savedFile = await File.create(savedFileDto);
    await diskService.changeSpace(user.id, file.size, "add");
    return savedFile;
  }

  async downloadFile(user, id) {
    const file = await File.findOne({ where: { id, userId: user.id } });
    if (!file) {
      throw ErrorHandler.badRequest("Файл не найден");
    }
    const path = this.getPath(file, user.uuid);
    if (fs.existsSync(path)) {
      return { path, name: file.name };
    } else {
      throw ErrorHandler.badRequest("Файл по данному пути не найден");
    }
  }

  async searchFile(user, searchQuery) {
    const files = await File.findAll({ where: { userId: user.id } });
    return searchQuery
      ? files.filter((file) => file.name.includes(searchQuery))
      : files;
  }

  async deleteFile(user, id) {
    const file = await File.findOne({ where: { id, userId: user.id } });
    if (!file) {
      throw ErrorHandler.badRequest("Файл не найден");
    }
    if (file.type === "dir") {
      const destroyFiles = await File.findAll({
        where: { userId: user.id, path: { [Op.like]: `${file.path}%` } },
        order: [["id", "desc"]],
      });

      const destroyIdsFile = destroyFiles.map((item) => item.id);
      const destroyPathsFile = destroyFiles.map((item) => ({
        path: this.getPath(item, user.uuid),
        type: item.type,
      }));

      await File.destroy({ where: { id: destroyIdsFile } });
      destroyPathsFile.forEach((item) => {
        if (item.type === "dir") {
          fs.rmdirSync(item.path, { recursive: true });
        } else {
          fs.unlinkSync(item.path);
        }
      });
    } else {
      const path = this.getPath(file, user.uuid);
      fs.unlinkSync(path);
      await file.destroy();
    }
    return file;
  }

  async favoritFile(user, sort) {
    return await File.findAll({
      where: { userId: user.id, isFavorit: true },
      order: [["name", sort]],
    });
  }

  async setFavoritFile(user, id, state = true) {
    const file = await File.findOne({ where: { id, userId: user.id } });
    if (!file) {
      throw ErrorHandler.badRequest("Файл не найден");
    }
    if (file.type === "dir") {
      const destroyFiles = await File.findAll({
        where: { userId: user.id, path: { [Op.like]: `${file.path}%` } },
      });
      const destroyIdsFile = destroyFiles.map((item) => item.id);
      await File.update(
        { isFavorit: state },
        { where: { id: destroyIdsFile } }
      );
    } else {
      file.isFavorit = state;
      await file.save();
    }

    return file;
  }

  async basketFiles(user, sort) {
    return await File.findAll({
      where: { userId: user.id, isTrash: true },
      order: [["name", sort]],
    });
  }

  async changeBasketFile(user, id, state = true) {
    const file = await File.findOne({ where: { id, userId: user.id } });
    if (!file) {
      throw ErrorHandler.badRequest("Файл не найден");
    }
    if (file.type === "dir") {
      const changeFiles = await File.findAll({
        where: { userId: user.id, path: { [Op.like]: `${file.path}%` } },
      });
      const changeIdsFile = changeFiles.map((item) => item.id);
      await File.update({ isTrash: state }, { where: { id: changeIdsFile } });
    } else {
      file.isTrash = state;
      await file.save();
    }

    return file;
  }

  async clearBasket(user) {
    const trashedFiles = await File.findAll({
      where: { userId: user.id, isTrash: true },
    });
    const files = await Promise.all(
      trashedFiles.map(async (item) => await this.deleteFile(user, item.id))
    );
    return "ok";
  }
}

module.exports = new FileService();
