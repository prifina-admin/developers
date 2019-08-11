const validate = require('./validate');
/**
 * Function for 3rd parties to request access to user data
 * @param {string} requester_id - Registered ID of the service requesting user data
 * @param {string} user_id - Registered ID of the user whose data is being requested
 * @param {RequestObject[]} categories - An array of different categories of data required.
 * @returns {?error} Either an error or nothing
*/
function request(service_id, user_id, categories) {
    try {
        validate.userID(user_id);
    } catch (error) {
        // return error
    }

    try {
        validate.serviceID(service_id);
    } catch(error) {
        // return error
    }

    try {
        categories.forEach((categoryObject) => {
            validate.category(categoryObject);
        });
    } catch (error) {
        // return error
    }
    
}

module.exports = request;