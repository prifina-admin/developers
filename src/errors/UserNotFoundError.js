/**
 * Error for when a User is not found in the database
 */
class UserNotFoundError extends Error {
    /**
     * Create a UserNotFoundError
     * @param {string} message - The message explaining the error
     */
    constructor(message) {
        super(message);
        this.statusCode = 404;
    }

    /**
     * Get the error message
     * @return {string} the error message
     */
    getMessage() {
        return this.message;
    }

    /**
     * Get the error status code
     * @return {number} the error status code
     */
    getStatusCode() {
        return this.statusCode;
    }
}

module.exports = UserNotFoundError;