//middleware для проверки доступа к сервисам для которых необходим токен авторизации

const ErrorHandler = require('../handlers/errorHandlers');
const TokenService = require('../services/tokenService');
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      return next(ErrorHandler.unauthorizedError());
    }

    const accessToken = authorizationHeader.split(' ')[1];
    if (!accessToken) {
      return next(ErrorHandler.unauthorizedError());
    }

    const user = TokenService.validateAccessToken(accessToken);
    if (!user) {
      return next(ErrorHandler.unauthorizedError());
    }
    req.user = user;
    next();
  } catch (e) {
    return next(ErrorHandler.unauthorizedError());
  }
};
