const ErrorHandler = require('../handlers/errorHandlers');

module.exports = function (err, req, res, next) {
  if (err instanceof ErrorHandler) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ message: `ошибка которая не обработана!` });
};
