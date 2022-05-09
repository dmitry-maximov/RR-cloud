const { User } = require('../models/index');
const bcrypt = require('bcrypt');
const ErrorHandler = require('../handlers/errorHandlers');
const mailService = require('./mailService');
const tokenService = require('./tokenService');
const UserDto = require('../dtos/userDto');
const uuid = require('uuid');

class UserService {
  async registration(email, password, name, family, login) {
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      throw ErrorHandler.badRequest(
        `Пользователь с адресом ${email} уже существует`
      );
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const activationLink = uuid.v4();

    const user = await User.create({
      email,
      password: hashPassword,
      name,
      family,
      login,
      activationLink,
    });

    const userDto = new UserDto(user);

    // await mailService.sendActivatedMail(
    //   email,
    //   `${process.env.API_URL}/api/auth/activate/${activationLink}`
    // );
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async login(email, password) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw ErrorHandler.badRequest(`Пользователь не найден`);
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw ErrorHandler.badRequest('Неверный пароль');
    }

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async activate(activationLink) {
    const user = await User.findOne({ where: { activationLink } });
    if (!user) {
      throw ErrorHandler.badRequest('Неккоректная ссылка активации');
    }
    user.isActivated = true;
    await User.save();
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ErrorHandler.unauthorizedError();
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      throw ErrorHandler.unauthorizedError();
    }
    const user = await User.findOne({ where: { id: userData.id } });
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }
}

module.exports = new UserService();
