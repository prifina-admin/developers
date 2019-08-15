/**
 * Error for when an entity fails validation
 */
class ValidationError extends Error {
    /**
     * Create a ValidationError
     * @param {string} message - The message explaining the error
     */
    constructor(message) {
        super(message);
        this.statusCode = 400;
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

module.exports = ValidationError;