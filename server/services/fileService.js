const { File } = require('../models/index');
const fs = require('fs');
const path = require('path');
const ErrorHandler = require('../handlers/errorHandlers');
const FileDto = require('../dtos/fileDto');

class FileService {
  createDirectoryForFile(file) {
    const dirPath = path.dirname(__dirname);
    const filePath = path.join(
      dirPath,
      '/files',
      `${file.uuid}`,
      `${file.path}`
    );
    //const filePath = `${process.env.FILE_PATH}\\${file.userUuid}\\${file.path}`;
    return new Promise((resolve, reject) => {
      try {
        if (!fs.existsSync(filePath)) {
          fs.mkdirSync(filePath);
          return resolve({ message: 'Файл успешно создан' });
        } else {
          return reject(ErrorHandler.internalServer('Файл уже существует'));
        }
      } catch (e) {
        throw ErrorHandler.internalServer(
          'Ошибка при создании каталога на сервере'
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

  async getFiles(userId, parent) {
    let files = null;
    if (parent) files = await File.findAll({ where: { userId, parent } });
    else
      files = await File.findAll({ where: { userId: userId, parent: null } });
    return files;
  }

  async uploadFile(file, user, parent) {
    const dirPath = path.dirname(__dirname);
    const parentFile = parent
      ? await File.findOne({ where: { id: parent } })
      : null;

    //TO DO:
    //(user.usedSpace + file.size > user.diskSpace) => нет места

    let filePath;
    if (parentFile) {
      filePath = path.join(
        dirPath,
        '/files',
        `${user.uuid}`,
        `${parentFile.path}`,
        `${file.name}`
      );
    } else {
      filePath = path.join(dirPath, '/files', `${user.uuid}`, `${file.name}`);
    }

    if (fs.existsSync(filePath)) {
      throw ErrorHandler.badRequest('Файл уже существует');
    }

    file.mv(filePath);

    const type = file.name.split('.').pop();
    let fpath = file.name;
    if (parent) {
      fpath = parentFile.path + '\\' + file.name;
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
    return savedFile;
  }

  async downloadFile() {}

  async searchFile() {}

  async deleteFile() {}
}

module.exports = new FileService();
