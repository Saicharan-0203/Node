const knexConfig = require('../knexfile');
const Knex = require('knex');
const { Model } = require('objection');

const knex = Knex(knexConfig.development);
Model.knex(knex);

module.exports = knex;
