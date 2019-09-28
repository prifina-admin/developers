const validate = require('../utils/validate');
const AWS = require('aws-sdk');

/**
 * Function for 3rd parties to request access to user data
 * @param {string} service_id - Registered ID of the service requesting user data
 * @param {string} user_id - Registered ID of the user whose data is being requested
 * @param {RequestObject[]} categories - An array of different categories of data required along with the reason.
 * @returns {?error} Either an error or nothing
*/
module.exports.request = function(service_id, user_id, categories) {
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

    // register request in the database
    let err;
    const db = new AWS.DynamoDB.DocumentClient();
    const params = {
        TableName: 'Permissions',
        Item: {
            "Service_ID": service_id,
            "User_ID": user_id,
            "Categories": {}
        }
    }
    db.put(params, (_error, _data) => {
        err = _error;
    });

    if (err) { return err; }
}