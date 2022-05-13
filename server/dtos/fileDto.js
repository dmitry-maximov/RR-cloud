module.exports = class FileDto {
  id;
  name;
  type;
  size;
  path;
  parent;
  child; //тут массив File
  userId;
  userUuid;

  constructor(file) {
    this.id = file.id;
    this.name = file.name;
    this.type = file.type;
    this.size = file.size;
    this.path = file.path;
    this.parent = file.parent;
    this.child = file.child;
    this.userId = file.userId;
    this.userUuid = file.userUuid;
  }
};
