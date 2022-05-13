const ErrorHandler = require('../handlers/errorHandlers');

class FileController {
  async createDirectory(req, res, next) {
    try {
      const { name, type, parent, currentUser } = req.body;
      return res.json();
    } catch (e) {
      next(e);
    }
  }

  async uploadFile(req, res, next) {
    try {
      return res.json();
    } catch (e) {
      next(e);
    }
  }

  async getFiles(req, res, next) {
    try {
      return res.json();
    } catch (e) {
      next(e);
    }
  }

  async downloadFile(req, res, next) {
    try {
      return res.json();
    } catch (e) {
      next(e);
    }
  }

  async searchFile(req, res, next) {
    try {
      return res.json();
    } catch (e) {
      next(e);
    }
  }

  async deleteFile(req, res, next) {
    try {
      return res.json();
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new FileController();
