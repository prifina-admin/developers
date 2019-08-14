const ValidationError = require('../errors/ValidationError');

function serviceID(id) {
    const invalid_ids = [null, undefined, ''];

    if (typeof id != 'string' || invalid_ids.includes(id)) {
        throw new ValidationError('Invalid service_id');
    }
}

function userID(id) {
    const invalid_ids = [null, undefined, ''];

    if (typeof id != 'string' || invalid_ids.includes(id)) {
        throw new ValidationError('Invalid user_id');
    }
}

function category(categoryObject) {
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

module.exports = {
    userID,
    serviceID,
    category
}