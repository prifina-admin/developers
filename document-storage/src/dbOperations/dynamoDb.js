const AWS = require("aws-sdk");

let awsConfig = {
  region: "us-east-1",
  endpoint: "http://dynamodb.us-east-1.amazonaws.com",
  accessKeyId: "AKIAT2YRUHOLVIDYZ4VX", //process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: "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" //process.env.AWS_SECRET_ACCESS_KEY
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let putObject = data => {
  return docClient.put(data).promise();
};

let getObject = data => {
  return docClient.get(data).promise();
};

module.exports = {
  putObject: putObject,
  getObject: getObject
};
