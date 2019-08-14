function getSuccessResponse(successObject) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            successObject
        })
    };
}

function getErrorResponse(error) {
    if (!error.hasOwnProperty("errorCode")) {
        error["errorCode"] = "ENO001"; // General error code
    }
    return {
        statusCode: error.getStatusCode(),
        body: JSON.stringify({
            message: error.message,
            errorCode: error.errorCode
        })
    };
}

module.exports = {
    getSuccessResponse: getSuccessResponse,
    getErrorResponse: getErrorResponse
}