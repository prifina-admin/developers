// Tests for the request function

const request = require('../../src/access').request;

describe('Utility function \'request\'', () => {
    test("throws error when service_id is invalid", () => {
        const user_id = 'abc556defea69';
        const categories = [
            {
                data_code: 102,
                reason: 'The data will be used to track user location'
            },
            {
                data_code: 231,
                reason: 'The data will be used to predict user\'s destination'
            },
        ];
        
        let service_id;
        const invalid_ids = [null, undefined, '', 1234];
        const id_error = new Error('Invalid service_id');

        invalid_ids.forEach((id) => {
            service_id = id;
            expect(() => request(service_id, user_id, categories)).toThrow(id_error);    
        });
    });

    test("throws error when user_id is invalid", () => {
        const service_id = '';
        const categories = [
            {
                data_code: 102,
                reason: 'The data will be used to track user location'
            },
            {
                data_code: 231,
                reason: 'The data will be used to predict user\'s destination'
            },
        ];

        let user_id;
        const invalid_ids = [null, undefined, '', 1234];
        const id_error = new Error('Invalid service_id');

        invalid_ids.forEach((id) => {
            user_id = id;
            expect(() => request(service_id, user_id, categories)).toThrow(id_error);
        });
    });
});