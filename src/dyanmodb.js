'use strict';

const AWS = require('aws-sdk');

let options = {};
// connect to local DB if running offline
if (process.env.IS_OFFLINE) {
    options = {
        region: 'localhost',
        endpoint: 'http://localhost:8000',
    };
}
const docClient = new AWS.DynamoDB.DocumentClient(options);

const putObject = data => {
    return docClient.put(data).promise();
};

const getObject = data => {
    return docClient.get(data).promise();
};

module.exports = {
    putObject: putObject,
    getObject: getObject
};