'use strict';

const request = require('./services/request');
const data = require('./services/data');
const grant = require('./services/grant');

const responseUtil = require('./utils/response');

// handler function for user service to request data access from user
module.exports.requestAccess = async (event, context, callback) => {
  // get paramss
  const user_id = event.user_id;
  const service_id = event.user_id;
  const categories = event.categories;
  
  // call request function with params
  const err = request(service_id, user_id, categories);
  if (err) {
    callback(responseUtil.getErrorResponse(err));
  }
  
  // send adequete response
  callback(responseUtil.getSuccessResponse());
};

// handler function for service to access user data
module.exports.accessData = async (event, context, callback) => {
  // get params
  const user_id = event.user_id;
  const service_id = event.user_id;
  const categories = event.categories;

  // call data function with params
  const err = data(service_id, user_id, categories);
  if (err) {
    callback(responseUtil.getErrorResponse(err));
  }

  // send adequete response
  callback(responseUtil.getSuccessResponse());
};

// handler function for user to grant a service access to their data
module.exports.grantAccess = async (event, context, callback) => {
  // get params
  const user_id = event.user_id;
  const service_id = event.user_id;
  const category = event.category;

  // call grant function with params to grant access
  const err = grant(service_id, user_id, category);
  if (err) {
    callback(responseUtil.getErrorResponse(err));
  }

  // send adequete response
  callback(responseUtil.getSuccessResponse());
}
