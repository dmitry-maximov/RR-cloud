const FileService = require("../services/fileService");

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
      const { parent, sort } = req.query;
      const { user } = req;

      const files = await FileService.getFiles(user.id, parent, sort);
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

      const files = await FileService.searchFile(user, search);
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
  async favoritFile(req, res, next) {
    try {
      const { sort } = req.query;
      const { user } = req;

      const files = await FileService.favoritFile(user, sort);
      return res.json(files);
    } catch (e) {
      next(e);
    }
  }

  async setFavoritFile(req, res, next) {
    try {
      const { id, state } = req.body;
      const { user } = req;

      const file = await FileService.setFavoritFile(user, id, state);
      return res.json(file);
    } catch (e) {
      next(e);
    }
  }

  async basketFiles(req, res, next) {
    try {
      const { sort } = req.query;
      const { user } = req;

      const files = await FileService.basketFiles(user, sort);
      return res.json(files);
    } catch (e) {
      next(e);
    }
  }

  async changeBasketFile(req, res, next) {
    try {
      const { id, state } = req.body;
      const { user } = req;

      const file = await FileService.changeBasketFile(user, id, state);
      return res.json(file);
    } catch (e) {
      next(e);
    }
  }
  async deleteBasketFile(req, res, next) {
    try {
      const { user } = req;

      const file = await FileService.clearBasket(user);
      return res.json(file);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new FileController();
