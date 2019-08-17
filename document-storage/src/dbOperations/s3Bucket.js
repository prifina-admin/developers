const AWS = require("aws-sdk");

let s3 = new AWS.S3({
  accessKeyId: "AKIAT2YRUHOLVIDYZ4VX", //process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: "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", //process.env.AWS_SECRET_ACCESS_KEY,
  s3BucketEndpoint: false,
  endpoint: "https://s3.amazonaws.com"
});

let fileUpload = (data, callback) => {
  return s3.putObject(data).promise();
};

module.exports = {
  fileUpload: fileUpload
};
