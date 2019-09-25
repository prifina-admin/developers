'use strict';

const request = require('./access/request');
const data = require('./access/data');
const grant = require('./access/grant');

const responseUtil = require('./utils/response');

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

module.exports.grantAccess = async (event, context, callback) => {
  // get params
  const user_id = event.user_id;
  const service_id = event.user_id;
  const category = event.category;

  // call data function with params
  const err = grant(service_id, user_id, category);
  if (err) {
    callback(responseUtil.getErrorResponse(err));
  }

  // send adequete response
  callback(responseUtil.getSuccessResponse());
}
