const knex = require('./connection');

function getAll(table) {
  return knex(table);
}

function getOne(table, id) {
  return knex(table).where('id', id).first();
}

function newItem(table, item) {
  return knex(table).insert(item);
}

module.exports = { getAll, getOne, newItem };
