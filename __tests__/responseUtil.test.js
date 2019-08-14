const responseUtil = require('../src/responseUtil');
const ValidationError = require('../src/errors/ValidationError');
const UserNotFoundError = require('../src/errors/UserNotFoundError');
const ServiceNotFoundError = require('../src/errors/ServiceNotFoundError');

describe('Utility module responseUtil', () => {
    describe('child function getSuccessResponse', () => {
        test('gives success object when a non error is passed', () => {
            // responseUtil.getSuccessResponse()
        });
    });

    describe('child function getErrorResponse', () => {
        test('gives error object when a service not found error is passed', () => {
            const error = new ServiceNotFoundError('Service with provided ID not found');
            expect(responseUtil.getErrorResponse(error)).toEqual({
                statusCode: 404,
                body: JSON.stringify({
                    message: error.getMessage(),
                    errorCode: 'ENO001'
                })
            });
        });

        test('gives error object when a user not found error is passed', () => {
            const error = new UserNotFoundError('User with provided ID not found');
            expect(responseUtil.getErrorResponse(error)).toEqual({
                statusCode: 404,
                body: JSON.stringify({
                    message: error.getMessage(),
                    errorCode: 'ENO001'
                })
            });
        });

        test('gives error object when a validation error is passed', () => {
            const error = new ValidationError('Missing or invalid value in data field.');
            expect(responseUtil.getErrorResponse(error)).toEqual({
                statusCode: 400,
                body: JSON.stringify({
                    message: error.getMessage(),
                    errorCode: 'ENO001'
                })
            });
        });
    });
});