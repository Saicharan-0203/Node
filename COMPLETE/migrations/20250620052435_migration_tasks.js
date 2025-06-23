exports.up = function(knex) {
  return knex.schema.createTable('tasks', table => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
  });
};

exports.down = knex => knex.schema.dropTable('tasks');
