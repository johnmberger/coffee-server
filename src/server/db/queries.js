const knex = require('./connection');

function getAll(table) {
  return knex(table);
}

function getOne(table, id) {
  return knex(table).where('id', id).first();
}

module.exports = { getAll, getOne };
