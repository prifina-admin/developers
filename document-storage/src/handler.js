const uploadDocument = require("./services/document/documents");
const multipartparser = require("lambda-multipart-parser");

module.exports.upload = async event => {
  var multipartData = await multipartparser.parse(event);
  var userId = multipartData.userId;
  var name = multipartData.userName;
  var docName = multipartData.files[0].filename;
  var document = multipartData.files[0].content.toString();

  return uploadDocument
    .addDocument(docName, document, userId, name)
    .then(data => {
      return {
        statusCode: 200,
        body: JSON.stringify(data)
      };
    })
    .catch(ex => {
      return {
        statusCode: ex.statusCode,
        body: JSON.stringify({
          message: ex.message,
          statusCode: ex.statusCode
        })
      };
    });
};
