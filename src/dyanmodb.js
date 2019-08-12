'use strict';

const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB({
    region: 'localhost',
    endpoint: 'http://localhost:8000',
    accessKeyId: 'DEFAULT_ACCESS_KEY',  // needed if you don't have aws credentials at all in env
    secretAccessKey: 'DEFAULT_SECRET' // needed if you don't have aws credentials at all in env
});

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