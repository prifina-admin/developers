var AWS = require("aws-sdk");
let awsConfig = {
  region: "us-east-1",
  endpoint: process.env.AWS_DYNAMODB_ENDPOINT,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
};

AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();
var putObject = data => {
  return docClient.put(data).promise();
};

let getObject = data => {
  return docClient.get(data).promise();
};

module.exports = {
  putObject: putObject,
  getObject: getObject
};
