//TO DO: сервисы для работы с токеноми

const jwt = require('jsonwebtoken');
const { Token } = require('../models/index');

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET, {
      expiresIn: '30m',
    });
    const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET, {
      expiresIn: '1d',
    });
    return {
      accessToken,
      refreshToken,
    };
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await Token.findOne({ where: { userId } });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await Token.create({ userId, refreshToken });
    return token;
  }

  async removeToken(refreshToken) {
    const token = await Token.destroy({ where: { refreshToken } });
    return token;
  }

  async findToken(refreshToken) {
    const token = await Token.findOne({ where: { refreshToken } });
    return token;
  }

  validateAccessToken(token) {
    try {
      const userData = jwt.verify(token, process.env.ACCESS_SECRET);
      return userData;
    } catch (e) {
      return null;
    }
  }

  validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token, process.env.REFRESH_SECRET);
      return userData;
    } catch (e) {
      return null;
    }
  }
}

module.exports = new TokenService();
