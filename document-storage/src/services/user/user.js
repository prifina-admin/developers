var dynamoInstance = require("../../dbOperations/dynamoDb");

var getUser = function(userId, name) {
  var params = {
    TableName: "User",
    Key: {
      Id: userId,
      name: name
    }
  };
  console.log("params areuser", params);
  return dynamoInstance.getObject(params);
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
