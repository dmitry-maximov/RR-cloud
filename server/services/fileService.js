const { File } = require('../models/index');
const fs = require('fs');
const path = require('path');
const ErrorHandler = require('../handlers/errorHandlers');

class FileService {
  createDirectoryForFile(file) {
    const dirPath = path.dirname(__dirname);
    const filePath = path.join(
      dirPath,
      '/files',
      `${file.userUuid}`,
      `${file.path}`
    );
    //const filePath = `${process.env.FILE_PATH}\\${file.userUuid}\\${file.path}`;
    return new Promise((resolve, reject) => {
      try {
        if (!fs.existsSync(filePath)) {
          fs.mkdirSync(filePath);
          return resolve({ message: 'Файл успешно создан' });
        } else {
          return reject({ message: 'Файл уже существует' });
        }
      } catch (e) {
        throw ErrorHandler.internalServer(
          'Ошибка при создании каталога на сервере'
        );
      }
    });
  }

  async createDirectory() {}

  async uploadFile() {}

  async getFiles() {}

  async downloadFile() {}

  async searchFile() {}

  async deleteFile() {}
}

module.exports = new FileService();
