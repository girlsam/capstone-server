exports.up = (knex, Promise) => {
  return knex.schema.createTable('mate_preferences', (table) => {
    table.increments();
    table.integer('min_age').notNullable();
    table.integer('max_age').notNullable();
    table.string('gender').notNullable();
    table.string('smoker_friendly').notNullable();
    table.string('sleep_habits').notNullable();
    table.string('weekday').notNullable();
    table.string('weekend').notNullable();
    table.boolean('kids').notNullable().defaultTo(false);
    table.integer('user_id').references('id').inTable('users');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('mate_preferences');
};
