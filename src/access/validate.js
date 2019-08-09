function serviceID(id) {
    const invalid_ids = [null, undefined, ''];

    if (typeof id != 'string' || invalid_ids.includes(id)) {
        throw new Error('Invalid service_id');
    }
}

function userID(id) {
    const invalid_ids = [null, undefined, ''];

    if (typeof id != 'string' || invalid_ids.includes(id)) {
        throw new Error('Invalid user_id');
    }
}

function category(categoryObject) {
    // validate the data key in the object
    if (!categoryObject.data || typeof categoryObject.data != 'number') {
        throw new Error('Missing or invalid value in data field.');
    }

    // validate the reason key in the object
    if (!categoryObject.reason || typeof categoryObject.reason != 'string') {
        throw new Error('Missing or invalid value in reason field.');
    }
}

module.exports = {
    userID,
    serviceID,
    category
}