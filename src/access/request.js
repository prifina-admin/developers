const validate = require('./validate');
let AWS = require('aws-sdk');

/**
 * Function for 3rd parties to request access to user data
 * @param {string} requester_id - Registered ID of the service requesting user data
 * @param {string} user_id - Registered ID of the user whose data is being requested
 * @param {RequestObject[]} categories - An array of different categories of data required.
 * @returns {?error} Either an error or nothing
*/
function request(service_id, user_id, categories) {
    // run validations and return error
    try {
        validate.userID(user_id);
        validate.serviceID(service_id);
        categories.forEach((categoryObject) => {
            validate.category(categoryObject);
        });
    } catch (error) {
        return error;
    }

    let db = new AWS.DynamoDB();    
}

module.exports = request;