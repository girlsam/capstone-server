exports.up = (knex, Promise) => {
  return knex.schema.createTable('accounts', table => {
    table.increments('id').primary();
    table.boolean('is_admin').notNullable().defaultTo(false);
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('accounts');
};
