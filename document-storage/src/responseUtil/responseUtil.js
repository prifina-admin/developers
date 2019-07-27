let getSuccessResponse = function(successObject) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      successObject
    })
  };
};

let getErrorResponse = function(error) {
  if (!error.hasOwnProperty("errorCode")) {
    error["errorCode"] = "STDOC004"; //I'm setting some General Error Code if not present.
  }
  return {
    statusCode: error.statusCode,
    body: JSON.stringify({
      message: error.message,
      errorCode: error.errorCode
    })
  };
};

module.exports = {
  getSuccessResponse: getSuccessResponse,
  getErrorResponse: getErrorResponse
};
