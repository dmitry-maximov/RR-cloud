//middleware для проверки доступа к сервисам для которых необходим токен авторизации

const ErrorHandler = require('../handlers/errorHandlers');
const TokenService = require('../services/tokenService');

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

    next();
  } catch (e) {
    return next(ErrorHandler.unauthorizedError());
  }
};
