
const knex = require('knex');
const knexfile = require('./knexfile');
const environment = require('../../config/environment');

let db;
if (environment.default.nodeEnv === 'production') {
  db = knex(knexfile.production);
} else {
  db = knex(knexfile.development);
}

module.exports = db;
