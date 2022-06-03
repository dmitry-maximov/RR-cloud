const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  name: { type: DataTypes.STRING },
  family: { type: DataTypes.STRING },
  login: { type: DataTypes.STRING, allowNull: false },
  isActivated: { type: DataTypes.BOOLEAN, defaultValue: false },
  activationLink: { type: DataTypes.STRING },
});

const Token = sequelize.define("token", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  refreshToken: { type: DataTypes.TEXT, allowNull: false },
});

const File = sequelize.define("file", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  type: { type: DataTypes.STRING, allowNull: false },
  size: { type: DataTypes.INTEGER, default: 0 },
  path: { type: DataTypes.TEXT, allowNull: false },
  parent: { type: DataTypes.INTEGER },
  child: { type: DataTypes.INTEGER },
  isFavorit: { type: DataTypes.BOOLEAN, defaultValue: false },
  isTrash: { type: DataTypes.BOOLEAN, defaultValue: false },
});

const Disk = sequelize.define("disk", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  space: { type: DataTypes.BIGINT, defaultValue: 1024 ** 3 * 10 },
  usedSpace: { type: DataTypes.BIGINT, defaultValue: 0 },
});

User.hasOne(Token);
Token.belongsTo(User);

User.hasMany(File);
File.belongsTo(User);

User.hasOne(Disk);
Disk.belongsTo(User);

module.exports = {
  User,
  Token,
  File,
  Disk,
};
