exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.text('description').notNullable();
    table.string('image').notNullable();
    table.integer('age').notNullable();
    table.string('gender').notNullable();
    table.string('smoker_friendly').notNullable();
    table.string('morning_sleep').notNullable();
    table.string('night_sleep').notNullable();
    table.string('weekday').notNullable();
    table.string('weekend').notNullable();
    table.integer('account_id').references('id').inTable('accounts');
    table.string('after_hours').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users');
};
