const validate = require('../../src/utils/validate');

// Tests for the validate module
describe("module: utils\nfunction: validate", () => {
    test("throws error when id is invalid", () => {
        const invalid_ids = [null, undefined, '', 1234];
        const id_error = new Error('Invalid service_id');

        invalid_ids.forEach((id) => {
            expect(() => validate.registeredID(id)).toThrow(id_error);
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