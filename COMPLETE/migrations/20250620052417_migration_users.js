exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('phone').notNullable();
    table.integer('team_id').unsigned().references('id').inTable('teams').onDelete('CASCADE');
  });
};

exports.down = knex => knex.schema.dropTable('users');

