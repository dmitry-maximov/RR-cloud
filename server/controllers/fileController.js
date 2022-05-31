const FileService = require('../services/fileService');

class FileController {
  async createDirectory(req, res, next) {
    try {
      const { name, type, parent } = req.body;
      const { user } = req;

      const file = await FileService.createDirectory(name, type, parent, user);
      return res.json(file);
    } catch (e) {
      next(e);
    }
  }

  async getFiles(req, res, next) {
    try {
      const { parent } = req.query;
      const { user } = req;

      const files = await FileService.getFiles(user.id, parent);
      return res.json(files);
    } catch (e) {
      next(e);
    }
  }

  async uploadFile(req, res, next) {
    try {
      const file = req.files.file;
      const { user } = req;
      const { parent } = req.body;

      const files = await FileService.uploadFile(file, user, parent);
      return res.json(files);
    } catch (e) {
      next(e);
    }
  }

  async downloadFile(req, res, next) {
    try {
      const { id } = req.query;
      const { user } = req;

      const { path, name } = await FileService.downloadFile(user, id);
      return res.download(path, name);
    } catch (e) {
      next(e);
    }
  }

  async searchFile(req, res, next) {
    try {
      const { search } = req.query;
      const { user } = req;

      const files = FileService.searchFile(user, search);
      return res.json(files);
    } catch (e) {
      next(e);
    }
  }

  async deleteFile(req, res, next) {
    try {
      const { id } = req.query;
      const { user } = req;
      const files = await FileService.deleteFile(user, id);
      return res.json(files);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new FileController();
