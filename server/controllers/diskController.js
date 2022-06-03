const diskService = require("../services/diskService");

class DiskController {
  async getSpace(req, res, next) {
    try {
      const { user } = req;
      const disk = await diskService.getFreePlace(user.id);
      return res.json(disk);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new DiskController();
