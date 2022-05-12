class ErrorHandler extends Error {
  constructor(status, message, errors = []) {
    super();
    this.status = status;
    this.message = message;
    this.errors = errors;
  }

  static unauthorizedError() {
    return new ErrorHandler(401, 'Пользователь не авторизован');
  }

  static forbidden(message) {
    return new ErrorHandler(403, message);
  }

  static badRequest(message, errors = []) {
    return new ErrorHandler(404, message, errors);
  }

  static internalServer(message) {
    return new ErrorHandler(500, message);
  }
}

module.exports = ErrorHandler;
