class UserNotFoundError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 404;
    }

    getMessage() {
        return this.message;
    }

    getStatusCode() {
        return this.statusCode;
    }
}

module.exports = UserNotFoundError;