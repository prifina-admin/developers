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

module.exports = {
    userID,
    serviceID
}