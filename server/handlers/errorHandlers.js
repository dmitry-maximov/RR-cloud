class ErrorHandler extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }

  static forbidden(message) {
    return new ApiError(403, message);
  }

  static badRequest(message) {
    return new ApiError(404, message);
  }

  static internalServer(message) {
    return new ApiError(500, message);
  }
}

module.exports = ErrorHandler;
