const request = require('../../src/services/request');
const AWS = require('aws-sdk');
let db;

// set up items in database tables before running tests
beforeAll(() => {
    // connect to DB
    db = new AWS.DynamoDB.DocumentClient();
    // add a registered service
    const serviceParams = {
        TableName: 'Services',
        Item: {
            "ID": 'abcd345ef',
            "Name": "ACME services"
        }
    };
    db.put(serviceParams, (err, _data) => {
        if (err) { console.error(err); }        
    });
    // add a registered user
    const userParams = {
        TableName: 'Users',
        Item: {
            "ID": 'abcd455ef',
            "Name": "John Appleseed"
        }
    };
    db.put(userParams, (err, _data) => {
        if (err) { console.error(err); }
    });
});

// integration tests for utility function request
describe('Utility function \'request\'', () => {

    test.todo('returns error if service is not registered in the database', () => {
        const err = request('notanid', 'abcd455ef', [
            {
                id: 123,
                reason: 'heres a valid reason for the data'
            }
        ]);

        expect(err).toBeDefined();
    });

    test.todo('returns error if user is not registered in the database', () => {
        const err = request('abcd345ef', 'not an id', [
            {
                id: 123,
                reason: 'heres a valid reason for the data'
            }
        ]);

        expect(err).toBeDefined();
    });
    
    test.todo('Given valid input, should add the request to the database', () => {
        const err = request('abcd345ef', 'abcd455ef', [
            {
                id: 123,
                reason: 'heres a valid reason for the data'
            }
        ]);
        expect(err).toBeNull();

        
    });

    test.todo('Given invalid input, should not add the request to the database');
});