'use strict';

let AWS = require('aws-sdk');
let AWSMock = require('aws-sdk-mock');

describe('mocking DynamoDB connection', () => {
    beforeEach(() => {
        AWSMock.setSDKInstance(AWS);
    });
    
    afterEach(() => {
        AWSMock.restore('DynamoDB.DocumentClient');
    });

    test('puts an item to the database', async () => {
        // Overwriting DynamoDB.DocumentClient.put()
        AWSMock.mock('DynamoDB.DocumentClient', 'put', (params, callback) => {
            // console.log('DynamoDB.DocumentClient', 'put', 'mock called');
            callback(null, { pk: "foo", sk: "bar" });
        });

        let input = { TableName: '', Key: {} };
        const docClient = new AWS.DynamoDB.DocumentClient();
        expect(await docClient.put(input).promise()).toStrictEqual({ pk: 'foo', sk: 'bar' });
    });
    
    test('gets an item from the database', async () => {
        // Overwriting DynamoDB.DocumentClient.get()
        AWSMock.mock('DynamoDB.DocumentClient', 'get', (params, callback) => {
            // console.log('DynamoDB.DocumentClient', 'get', 'mock called');
            callback(null, { pk: "foo", sk: "bar" });
        });

        let input = { TableName: '', Key: {} };
        const docClient = new AWS.DynamoDB.DocumentClient();
        expect(await docClient.get(input).promise()).toStrictEqual({ pk: 'foo', sk: 'bar' });
    });
});