const LOGGER = require("log4js");
const LoggerConfigurations = require("../../configurations/logger/logger");
LOGGER.configure(LoggerConfigurations.getLoggerConfiguration());

const userOperations = require("../user/user");
const s3bucketOperations = require("../../dbOperations/s3Bucket");

let addDocument = async function(docName, document, userId, name) {
  //preparing document for uploading.
  let data = {
    Bucket: "users-unorganized-files",
    Key: docName,
    Body: document
  };

  let user;
  try {
    user = await userOperations.getUser(userId, name);
    s3bucketOperations.fileUpload(data);
    updateDocumentReference(user, data);
    LOGGER.info(
      "Sucessful, able to upload the file for user , username:",
      name
    );
    return {
      message: data.Key + " Succussful, uploaded.",
      userId: user.Item["Id"],
      userName: user.Item["name"]
    };
  } catch (error) {
    //How to handle invalid input and internal server errors??
    LOGGER.info("Failure, unable to upload the file username:", name);
    throw error;
  }
};

let updateDocumentReference = async function(user, data) {
  //ensuring that User has unOrganisedDocuments property.
  if (user.Item.hasOwnProperty("unOrganisedDocuments")) {
    //adding S3 bucket Object stored reference url to user object
    user.Item["unOrganisedDocuments"].push({
      [data.Key]:
        "https://" + data["Bucket"] + ".s3.amazonaws.com/" + [data.Key]
    });
  } else {
    //adding S3 bucket Object stored reference url to user object
    user.Item["unOrganisedDocuments"] = [
      {
        [data.Key]:
          "https://" + data["Bucket"] + ".s3.amazonaws.com/" + [data.Key]
      }
    ];
  }
  userOperations.addUser(user);
  LOGGER.info(
    "Sucessful, able to update uploaded file reference to user object, username: {}",
    user.Item["name"]
  );
};

module.exports = {
  addDocument: addDocument
};
