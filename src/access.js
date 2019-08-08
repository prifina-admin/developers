const validate = require('./access/validate');

/**
 * @typedef RequestObject
 * @type {object}
 * @property {number} data_code - The code number of the category of data being requested.
 * @property {string} reason - A clear reason explaining why this particluar category of data is needed.
 */

/**
 * @typedef DataObject
 * @type {object}
 * @property {?object} data - The requested user data separated by categories.
 * @property {?error[]} error - Error(s) regarding the data access request.
 */

/**
 * Function for 3rd parties to request access to user data
 * @param {string} requester_id - Registered ID of the service requesting user data
 * @param {string} user_id - Registered ID of the user whose data is being requested
 * @param {RequestObject[]} categories - An array of different categories of data required.
 * @returns {?error} Either an error or nothing
*/
function request(service_id, user_id, categories) {
    validate.userID(user_id);
    validate.serviceID(service_id);
}

/**
 * Function for 3rd parties to access to user data, provided they have been granted permission by the user
 * @param {string} user_id - Registered ID of the user whose data is being requested
 * @param {RequestObject[]} categories - An array of different categories of data required.
 * @param {string} requester_id - Registered ID of the service requesting user data
 * @returns {DataObject} An object with error or data.
 */
function data(user_id, categories) {
    
}

// export the functions
module.exports = {
    data: data,
    request: request
};