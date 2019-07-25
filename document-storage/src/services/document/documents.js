var userOperations = require("../user/user");
var s3bucketOperations = require("../../dbOperations/s3Bucket");

var addDocument = async function(docName, document, userId, name) {
  var data = {
    Bucket: "users-unorganized-files",
    Key: docName,
    Body: document
  };

  return new Promise(function(resolve, reject) {
    userOperations
      .getUser(userId, name)
      .then(user => {
        if (user && user.hasOwnProperty("Item")) {
          s3bucketOperations
            .fileUpload(data)
            .then(response => {
              console.log("Successful, document uploaded", response);
              if (user.Item.hasOwnProperty("unOrganisedDocuments")) {
                user.Item["unOrganisedDocuments"].push({
                  [docName]:
                    "https://" +
                    data["Bucket"] +
                    ".s3.amazonaws.com/" +
                    [docName]
                });
                userOperations.addUser(user);
                resolve({
                  message: docName + " Succussful, uploaded.",
                  userId: userId,
                  userName: name
                });
              } else {
                user.Item["unOrganisedDocuments"] = [
                  {
                    [docName]:
                      "https://" +
                      data["Bucket"] +
                      ".s3.amazonaws.com/" +
                      [docName]
                  }
                ];
                userOperations.addUser(user);
                resolve({
                  message: docName + " Succussful, uploaded.",
                  userId: userId,
                  userName: name
                });
              }
            })
            .catch(error => {
              reject(error);
            });
        } else {
          reject({ message: "User Doesn't Exist", statusCode: 404 });
        }
      })
      .catch(error => {
        reject(error);
      });
  });
};

module.exports = {
  addDocument: addDocument
};
