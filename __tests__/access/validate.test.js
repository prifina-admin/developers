// Tests for the request function

const validate = require('../../src/access/validate');

describe('serviceID validation function', () => {
    test("throws error when service_id is invalid", () => {
        let service_id;
        
        const invalid_ids = [null, undefined, '', 1234];
        const id_error = new Error('Invalid service_id');

        invalid_ids.forEach((id) => {
            service_id = id;
            expect(() => validate.serviceID(service_id)).toThrow(id_error);
        });
    });
});

describe('userID validation function', () => {
    test("throws error when user_id is invalid", () => {
        let user_id;

        const invalid_ids = [null, undefined, '', 1234];
        const id_error = new Error('Invalid user_id');

        invalid_ids.forEach((id) => {
            user_id = id;
            expect(() => validate.userID(user_id)).toThrow(id_error);
        });
    });
});