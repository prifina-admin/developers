'use strict';

const db = require('./dyanmodb');
let { Access } = require('./access');
let accessObject;

module.exports.requestAccess = async (event, context, callback) => {
  if (!accessObject) {
    accessObject = new Access(db);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(accessObject.requestAccess(), null, 2),
  };
};

module.exports.accessData = async (event) => {
  if (!accessObject) {
    accessObject = new Access(db);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(accessObject.data(), null, 2),
  };
};
