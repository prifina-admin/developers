/**
 * @module ResponseUtil
 * @description Module to create response objects to be directly used by the handler.
 */

/**
 * Function to generate a success response with the data passed.
 * @param {object} successObject Data to be included in the response body.
 * @return {object}
 */
module.exports.getSuccessResponse = function(successObject) {
    return {
        statusCode: 200,
        body: successObject
    };
}

/**
 * Function to generate an error response when passed an error.
 * @param {Error} error error to be included in the response body
 * @return {object}
 */
module.exports.getErrorResponse = function(error) {
    if (!error.hasOwnProperty("errorCode")) {
        error["errorCode"] = "ENO001"; // General error code
    }
    return {
        statusCode: error.getStatusCode(),
        body: {
            message: error.message,
            errorCode: error.errorCode
        }
    };
}