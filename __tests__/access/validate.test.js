// Tests for the request function

const validate = require('../../src/access/validate');

describe('module: \'validate\'', () => {
    test("throws error when service_id is invalid", () => {
        let service_id;

        const invalid_ids = [null, undefined, '', 1234];
        const id_error = new Error('Invalid service_id');

        invalid_ids.forEach((id) => {
            service_id = id;
            expect(() => validate.serviceID(service_id)).toThrow(id_error);
        });
    });

    test("throws error when user_id is invalid", () => {
        let user_id;

        const invalid_ids = [null, undefined, '', 1234];
        const id_error = new Error('Invalid user_id');

        invalid_ids.forEach((id) => {
            user_id = id;
            expect(() => validate.userID(user_id)).toThrow(id_error);
        });
    });

    test("throws error when categories has invalid data field", () => {
        const invalidDataError = new Error('Missing or invalid value in data field.');
        const categoriesWithInvalidDataFields = [
            {
                data: null,
                reason: "A valid reason for this null data"
            },
            {
                data: undefined,
                reason: "Reason is defined, unlike my bud data"
            }, 
            {
                reason: "Reason without data is like a car without engine"
            },
            {
                data: "some string",
                reason: "Data, you\'re fake news."
            }
        ];        
        categoriesWithInvalidDataFields.forEach((categoryObject) => {
            expect(() => validate.category(categoryObject)).toThrow(invalidDataError);
        });
    });
    
    test("throws error when categories has invalid reason field", () => {
        const invalidReasonError = new Error('Missing or invalid value in reason field.');
        const categories = [
            {
                data: 135,
                reason: 150
            }, 
            {
                data: 123,
                reason: "Short, uninformative reason"   // shorter than 50 characters
            },
            {
                data: 561
            }, 
            {
                data: 7,
                reason: null
            },
            {
                data: 237,
                reason: undefined
            }
        ];

        categories.forEach((categoryObject) => {
            expect(() => validate.category(categoryObject)).toThrow(invalidReasonError);
        });
    });
});