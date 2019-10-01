const validate = require('../utils/validate');
const AWS = require('aws-sdk');

/**
 * Function for 3rd parties to request access to user data
 * @param {string} service_id - Registered ID of the service requesting user data
 * @param {string} user_id - Registered ID of the user whose data is being requested
 * @param {RequestObject[]} categories - An array of different categories of data required along with the reason.
 * @returns {?error} Either an error or nothing
*/
module.exports = function request(service_id, user_id, categories) {
    // run validations and return error
    try {
        validate.registeredID(user_id);
        validate.registeredID(service_id);
        categories.forEach((categoryObject) => {
            validate.category(categoryObject);
        });
    } catch (error) {
        return error;
    }

    const db = new AWS.DynamoDB.DocumentClient();
    
    // check if service is registered in DB
    let err, data;
    const serviceParams = {
        TableName: 'Services', 
        Item: {
            "ID": service_id
        }
    }
    db.get(serviceParams, (_error, _data) => {
        err = _error;
        data = _data;
    });

    if (err) { return err; }
    if (Object.keys(data).length() == 0) {
        // if no such service exists, return error
        return new Error(`Service with ID ${service_id} not found`);
    }

    // check if user is registered in DB
    let err, data;
    const userParams = {
        TableName: 'User',
        Item: {
            "ID": user_id
        }
    }
    db.get(userParams, (_error, _data) => {
        err = _error;
        data = _data;
    });

    if (err) { return err; }
    if (Object.keys(data).length() == 0) {
        // if no such service exists, return error
        return new Error(`User with ID ${user_id} not found`);
    }

    // register request in the database
    const requestParams = {
        TableName: 'Permissions',
        Item: {
            "Service_ID": service_id,
            "User_ID": user_id,
            "Categories": {}
        }
    }
    db.put(requestParams, (_error, _data) => {
        err = _error;
    });

    if (err) { return err; }
}