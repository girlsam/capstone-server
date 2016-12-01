exports.up = (knex, Promise) => {
  return knex.schema.createTable('room_preferences', (table) => {
    table.increments();
    table.text('neighborhoods').notNullable();
    table.text('amenities').notNullable();
    table.integer('budget_high').notNullable();
    table.integer('budget_low').notNullable();
    table.text('housing_type').notNullable();
    table.integer('user_id').references('id').inTable('users');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('room_preferences');
};
