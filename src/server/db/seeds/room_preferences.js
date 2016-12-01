
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('room_preferences').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('room_preferences').insert({
          budget_high: 1200,
          budget_low: 800,
          housing_type: ['apartment', 'single-family home', 'condo'],
          neighborhoods: ['capitol hill', 'cheesman', 'lodo', 'city park', 'uptown', 'washington park'],
          amenities: ['cats allowed', 'dogs allowed', 'off-street parking', 'in-unit laundry', 'bicycle storage', 'outdoor space'],
          user_id: knex('users').select('id').where('first_name', 'Tom')
        }),
        knex('room_preferences').insert({
          budget_high: 900,
          budget_low: 500,
          housing_type: ['apartment', 'single-family home', 'condo'],
          neighborhoods: ['capitol hill', 'cheesman', 'lodo', 'city park', 'uptown', 'washington park'],
          amenities: ['cats allowed', 'dogs allowed', 'off-street parking', 'in-unit laundry', 'bicycle storage', 'outdoor space'],
          user_id: knex('users').select('id').where('first_name', 'Kelly')
        }),
        knex('room_preferences').insert({
          budget_high: 750,
          budget_low: 500,
          housing_type: ['apartment', 'single-family home', 'condo'],
          neighborhoods: ['capitol hill', 'cheesman', 'lodo', 'city park', 'uptown', 'washington park'],
          amenities: ['cats allowed', 'dogs allowed', 'off-street parking', 'in-unit laundry', 'bicycle storage', 'outdoor space'],
          user_id: knex('users').select('id').where('first_name', 'Ashley')
        }),
        knex('room_preferences').insert({
          budget_high: 1200,
          budget_low: 800,
          housing_type: ['apartment', 'single-family home', 'condo'],
          neighborhoods: ['capitol hill', 'cheesman', 'lodo', 'city park', 'uptown', 'washington park'],
          amenities: ['cats allowed', 'dogs allowed', 'off-street parking', 'in-unit laundry', 'bicycle storage', 'outdoor space'],
          user_id: knex('users').select('id').where('first_name', 'James')
        }),
        knex('room_preferences').insert({
          budget_high: 900,
          budget_low: 500,
          housing_type: ['apartment', 'single-family home', 'condo'],
          neighborhoods: ['capitol hill', 'cheesman', 'lodo', 'city park', 'uptown', 'washington park'],
          amenities: ['cats allowed', 'dogs allowed', 'off-street parking', 'in-unit laundry', 'bicycle storage', 'outdoor space'],
          user_id: knex('users').select('id').where('first_name', 'Brian')
        }),
        knex('room_preferences').insert({
          budget_high: 750,
          budget_low: 500,
          housing_type: ['apartment', 'single-family home', 'condo'],
          neighborhoods: ['capitol hill', 'cheesman', 'lodo', 'city park', 'uptown', 'washington park'],
          amenities: ['cats allowed', 'dogs allowed', 'off-street parking', 'in-unit laundry', 'bicycle storage', 'outdoor space'],
          user_id: knex('users').select('id').where('first_name', 'Sarah')
        }),
        knex('room_preferences').insert({
          budget_high: 1200,
          budget_low: 800,
          housing_type: ['apartment', 'single-family home', 'condo'],
          neighborhoods: ['capitol hill', 'cheesman', 'lodo', 'city park', 'uptown', 'washington park'],
          amenities: ['cats allowed', 'dogs allowed', 'off-street parking', 'in-unit laundry', 'bicycle storage', 'outdoor space'],
          user_id: knex('users').select('id').where('first_name', 'Fatimah')
        }),
        knex('room_preferences').insert({
          budget_high: 900,
          budget_low: 500,
          housing_type: ['apartment', 'single-family home', 'condo'],
          neighborhoods: ['capitol hill', 'cheesman', 'lodo', 'city park', 'uptown', 'washington park'],
          amenities: ['cats allowed', 'dogs allowed', 'off-street parking', 'in-unit laundry', 'bicycle storage', 'outdoor space'],
          user_id: knex('users').select('id').where('first_name', 'Robert')
        }),
        knex('room_preferences').insert({
          budget_high: 750,
          budget_low: 500,
          housing_type: ['apartment', 'single-family home', 'condo'],
          neighborhoods: ['capitol hill', 'cheesman', 'lodo', 'city park', 'uptown', 'washington park'],
          amenities: ['cats allowed', 'dogs allowed', 'off-street parking', 'in-unit laundry', 'bicycle storage', 'outdoor space'],
          user_id: knex('users').select('id').where('first_name', 'Ray')
        })
      ]);
    });
};
