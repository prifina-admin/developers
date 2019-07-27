class UserNotFound extends Error {
  constructor(message, errorcode) {
    super(message);
    this.message = message;
    this.errorcode = errorcode;
    this.statusCode = 404;
  }

  getMessage() {
    return this.message;
  }

  getErrorCode() {
    return this.errorcode;
  }
}
module.exports = UserNotFound;
