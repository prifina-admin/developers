/**
 * Function for 3rd parties to access user data
 * @param {string} service_id - Registered ID of the service requesting user data
 * @param {string} user_id - Registered ID of the user whose data is being requested
 * @param {number[]} categories - An array of different categories of data required.
 * @returns {?error} Either an error or nothing
*/

module.exports.data = function(service_id, user_id, categories) {
    // check if service has access to user's data for each category
}