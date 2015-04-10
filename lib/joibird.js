var Promise = require('bluebird');
var joi = require('joi');

joi.validate = Promise.promisify(joi.validate, joi);

module.exports = joi;
