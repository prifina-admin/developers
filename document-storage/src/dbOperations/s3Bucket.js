var AWS = require("aws-sdk");

var s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  s3BucketEndpoint: false,
  endpoint: process.env.AWS_S3_ENDPOINT
});

var fileUpload = (data, callback) => {
  return s3.putObject(data).promise();
};

module.exports = {
  fileUpload: fileUpload
};
