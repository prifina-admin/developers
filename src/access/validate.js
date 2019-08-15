const ValidationError = require('../errors/ValidationError');

/**
 * @module Validation
 * @description Module containing functions to validate different entities like id, data category, etc.
 */

/**
 * Function to validate an ID
 * @param {string} id a distinct ID of a registered user or service
 * @returns {?ValidationError} an instance of ValidationError
 */
exports.registeredID = function(id) {
    const invalid_ids = [null, undefined, ''];

    if (typeof id != 'string' || invalid_ids.includes(id)) {
        throw new ValidationError('Invalid service_id');
    }
}

/**
 * Function to validate an ID
 * @param {string} id the provided ID to be validated
 * @returns {?ValidationError} an instance of ValidationError
 */
exports.category = function(categoryObject) {
    // validate the data key in the object
    if (!categoryObject.data || typeof categoryObject.data != 'number') {
        throw new ValidationError('Missing or invalid value in data field.');
    }

    // validate the reason key in the object
    if (!categoryObject.reason || typeof categoryObject.reason != 'string' || 
      typeof categoryObject.reason === 'string' && categoryObject.reason.length < 50) {
        throw new ValidationError('Missing or invalid value in reason field.');
    }
}