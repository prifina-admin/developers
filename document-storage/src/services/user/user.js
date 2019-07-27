const dynamoInstance = require("../../dbOperations/dynamoDb");
const UserNotFound = require("./UserNotFound");
const LOGGER = require("../../configurations/logger/logger").getLogger();

var getUser = async function(userId, name) {
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
    throw new UserNotFound("User doesn't exist", "STDOC0001");
  } else {
    LOGGER.info("Sucessful, able to get the user name:", name);
    return user;
  }
};

var addUser = function(user) {
  user = {
    TableName: "User",
    Item: user.Item
  };
  console.log(user);
  return dynamoInstance.putObject(user);
};

module.exports = {
  getUser: getUser,
  addUser: addUser
};
