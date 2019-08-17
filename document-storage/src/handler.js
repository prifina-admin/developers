const uploadDocument = require("./services/document/documents");
const multipartparser = require("lambda-multipart-parser");
const responseUtil = require("./responseUtil/responseUtil");

module.exports.upload = async (event, context, callback) => {
  let multipartData = await multipartparser.parse(event);
  let userId = multipartData.userId;
  let name = multipartData.userName;
  let docName = multipartData.files[0].filename;
  let document = multipartData.files[0].content.toString();

  try {
    let response = await uploadDocument.addDocument(
      docName,
      document,
      userId,
      name
    );
    callback(null, responseUtil.getSuccessResponse(response));
  } catch (error) {
    callback(null, responseUtil.getErrorResponse(error));
  }
};
