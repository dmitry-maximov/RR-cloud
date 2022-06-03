module.exports = class DiskDto {
  space;
  usedSpace;

  constructor(disk) {
    this.space = disk.space;
    this.usedSpace = disk.usedSpace;
  }
};
