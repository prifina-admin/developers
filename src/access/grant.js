const validate = require('../utils/validate');
const AWS = require('aws-sdk');

/**
 * Function for User to grant permissions for data to 3rd parties
 * @param {string} service_id - Registered ID of the service requesting user data
 * @param {string} user_id - Registered ID of the user whose data is being requested
 * @param {Number} category - An integer depicting the category of data
 * @returns {?error} Either an error or nothing
*/

module.exports.grant = function (service_id, user_id, category) {
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
        Key: {
            "Service_ID": service_id, 
            "User_ID": user_id
        },
        UpdateExpression: "set Categories[:key] = :value",
        ExpressionAttributevalues: {
            ":key": category,
            ":value": true
        }
    }
    db.update(params, (_error, _data) => {
        err = _error;
    });

    if (err) { return err; }
}