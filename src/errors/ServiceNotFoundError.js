/**
 * Error for when a Service is not found in the database
 */
class ServiceNotFoundError extends Error {
    /**
     * Create a ServiceNotFoundError
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

module.exports = ServiceNotFoundError;