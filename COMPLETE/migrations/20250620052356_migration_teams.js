exports.up = function(knex) {
  return knex.schema.createTable('teams', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
  });
};

exports.down = knex => knex.schema.dropTable('teams');

