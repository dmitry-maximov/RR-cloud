const sequelize = require('../models/index');

class UserService {
  async registration(email, password, name, family, login) {}

  async login(email, password) {}

  async logout(refreshToken) {}

  async activate(activationLink) {}

  async refresh(refreshToken) {}
}

module.exports = new UserService();
