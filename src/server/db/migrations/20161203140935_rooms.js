exports.up = (knex, Promise) => {
  return knex.schema.createTable('rooms', (table) => {
    table.increments();
    table.string('housing_type').notNullable();
    table.text('amenities').notNullable();
    table.integer('rent_cost').notNullable();
    table.integer('lease_length').notNullable();
    table.integer('bedrooms').notNullable();
    table.integer('bathrooms').notNullable();
    table.text('description').notNullable();
    table.string('cross_street_1').notNullable();
    table.string('cross_street_2').notNullable();
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.integer('zip_code').notNullable();
    table.string('neighborhood').notNullable();
    table.text('image').notNullable();
    table.integer('user_id').references('id').inTable('users');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('rooms');
};