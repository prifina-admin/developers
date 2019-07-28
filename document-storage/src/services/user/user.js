//configuring Logger
const LOGGER = require("log4js");
const LoggerConfigurations = require("../../configurations/logger/logger");
LOGGER.configure(LoggerConfigurations.getLoggerConfiguration());

const dynamoInstance = require("../../dbOperations/dynamoDb");
const UserNotFoundError = require("./UserNotFoundError");

let getUser = async function(userId, name) {
  let params = {
    TableName: "User",
    Key: {
      Id: userId,
      name: name
    }
  };

  let user = await dynamoInstance.getObject(params);
  //ensuring user should be present
  if (!(user && user.hasOwnProperty("Item"))) {
    LOGGER.error("Failure, Unable to find the user name:", name);
    throw new UserNotFoundError("User doesn't exist", "STDOC0001");
  } else {
    LOGGER.info("Sucessful, able to get the user name:", name);
    return user;
  }
};

let addUser = function(user) {
  user = {
    TableName: "User",
    Item: user.Item
  };
  return dynamoInstance.putObject(user);
};

module.exports = {
  getUser: getUser,
  addUser: addUser
};
