// File to contain user defined types for the documentation

/**
 * @typedef RequestObject
 * @type {object}
 * @property {number} data_code - The code number of the category of data being requested.
 * @property {string} reason - A clear reason explaining why this particluar category of data is needed.
 */

/**
 * @typedef DataObject
 * @type {object}
 * @property {?object} data - The requested user data separated by categories.
 * @property {?error[]} error - Error(s) regarding the data access request.
 */