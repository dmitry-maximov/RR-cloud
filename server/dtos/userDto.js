module.exports = class UserDto {
  id;
  email;
  name;
  family;
  login;
  isActivated;

  constructor(user) {
    this.id = user.id;
    this.email = user.email;
    this.name = user.name;
    this.family = user.family;
    this.login = user.login;
    this.isActivated = user.isActivated;
  }
};
