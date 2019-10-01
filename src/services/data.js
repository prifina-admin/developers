const validate = require('../utils/validate');
const AWS = require('aws-sdk');

/**
 * Function for 3rd parties to access user data
 * @param {string} service_id - Registered ID of the service requesting user data
 * @param {string} user_id - Registered ID of the user whose data is being requested
 * @param {number[]} categories - An array of different categories of data required.
 * @returns {?error} Either an error or data
*/
module.exports = function data(service_id, user_id, categories) {
    // check if service has access to user's data for each category
    let err;
    const db = new AWS.DynamoDB.DocumentClient();
    const params = {
        TableName: 'Permissions',
        Key: {
            "Service_ID": {
                S: service_id
            },
            "User_ID": {
                S: user_id
            }
        },
        AttributesToGet: [
            'Categories'
        ],
    };

    db.get(params, (_err, data) => {
        if (_err) {
            err = _err;
            return;
        }
    });
    if (err) { return err; }
    
    // if service has permission, return data
    
}