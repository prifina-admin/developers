class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 400;
    }

    getMessage() {
        return this.message;
    }

    getStatusCode() {
        return this.statusCode;
    }
}

module.exports = ValidationError;