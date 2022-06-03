const DiskDto = require("../dtos/diskDto");
const { Disk } = require("../models/index");

class DiskService {
  async createDiskSpace(userId) {
    return await Disk.create({ userId });
  }

  async removeDiskSpace(refreshToken) {
    return await Disk.destroy({ where: { userId } });
  }

  async getFreePlace(userId) {
    const disk = await Disk.findOne({ where: { userId } });
    if (!disk) {
      throw ErrorHandler.badRequest(
        "Информация о пространстве диска не найдена"
      );
    }
    return new DiskDto(disk);
  }

  async checkFreePlace(userId, fileSize) {
    const disk = await Disk.findOne({ where: { userId } });
    if (!disk) {
      throw ErrorHandler.badRequest(
        "Информация о пространстве диска не найдена"
      );
    }
    if (parseInt(disk.usedSpace) + fileSize > parseInt(disk.space)) {
      return false;
    } else {
      return true;
    }
  }

  async changeSpace(userId, fileSize, state) {
    const disk = await Disk.findOne({ where: { userId } });
    if (!disk) {
      throw ErrorHandler.badRequest(
        "Информация о пространстве диска не найдена"
      );
    }
    const used = disk.usedSpace;
    if (state === "add") {
      disk.usedSpace = parseInt(used) + fileSize;
    }
    if (state === "sub") {
      disk.usedSpace = parseInt(used) - fileSize;
    }

    return await disk.save();
  }
}

module.exports = new DiskService();
