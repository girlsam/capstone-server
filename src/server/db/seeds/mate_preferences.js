exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('mate_preferences').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('mate_preferences').insert({
          gender: ['male', 'female', 'non-binary'],
          sleep_habits: ['early riser', 'napper', 'early to bed'],
          min_age: 20,
          max_age: 35,
          smoker_friendly: ['420', 'tobacco'],
          weekday: '9-5ish',
          weekend: ['in the mountains', 'time to relax'],
          kids: false,
          after_hours: ['netflix and chill', 'i workout', 'maybe a bar, maybe a book'],
          user_id: knex('users').select('id').where('first_name', 'Ray')
        }),
        knex('mate_preferences').insert({
          gender: ['female', 'male'],
          sleep_habits: ['night owl', 'napper'],
          min_age: 20,
          max_age: 40,
          smoker_friendly: ['420', 'tobacco'],
          weekday: ['it varies', '9-5ish', 'day or night shift'],
          weekend: ['in the mountains', 'invite some friends over for some fun', 'work work work'],
          kids: ['true', 'false'],
          after_hours: ['every night is friday night', 'i workout', 'maybe a bar, maybe a book', 'netflix and chill'],
          user_id: knex('users').select('id').where('first_name', 'Kelly')
        }),
        knex('mate_preferences').insert({
          gender: 'female',
          sleep_habits: ['night owl', 'sleep in'],
          min_age: 25,
          max_age: 38,
          smoker_friendly: ['420'],
          weekday: ['it varies'],
          weekend: ['in the mountains', 'time to relax'],
          kids: true,
          after_hours: ['maybe a bar, maybe a book'],
          user_id: knex('users').select('id').where('first_name', 'Fatimah')
        }),
        knex('mate_preferences').insert({
          gender: 'male',
          sleep_habits: ['early to rise', 'napper'],
          min_age: 25,
          max_age: 35,
          smoker_friendly: ['420'],
          weekday: 'day or night shift',
          weekend: ['time to relax'],
          kids: false,
          after_hours: ['netflix and chill'],
          user_id: knex('users').select('id').where('first_name', 'Brian')
        }),
        knex('mate_preferences').insert({
          gender: 'male',
          sleep_habits: ['night owl', 'sleep in', 'napper'],
          min_age: 21,
          max_age: 39,
          smoker_friendly: ['420', 'tobacco'],
          weekday: 'day or night shift',
          weekend: ['in the mountains', 'time to relax'],
          kids: false,
          after_hours: ['every night is friday night'],
          user_id: knex('users').select('id').where('first_name', 'James')
        }),
        knex('mate_preferences').insert({
          gender: 'female',
          sleep_habits: ['early to bed', 'early to rise'],
          min_age: 19,
          max_age: 30,
          smoker_friendly: ['nope'],
          weekday: ['9-5ish'],
          weekend: ['relax'],
          kids: false,
          after_hours: ['netflix and chill', 'maybe a bar, maybe a book'],
          user_id: knex('users').select('id').where('first_name', 'Sarah')
        }),
        knex('mate_preferences').insert({
          gender: ['female'],
          sleep_habits: ['night owl', 'napper'],
          min_age: 20,
          max_age: 35,
          smoker_friendly: ['420', 'tobacco'],
          weekday: 'it varies',
          weekend: ['work work work'],
          kids: true,
          after_hours: ['every night is friday night'],
          user_id: knex('users').select('id').where('first_name', 'Ashley')
        }),
        knex('mate_preferences').insert({
          gender: ['male'],
          sleep_habits: ['night owl', 'early to rise'],
          min_age: 23,
          max_age: 35,
          smoker_friendly: ['tobacco'],
          weekday: ['day or night shift'],
          weekend: ['relax', 'in the mountains'],
          kids: false,
          after_hours: ['maybe a bar, maybe a book'],
          user_id: knex('users').select('id').where('first_name', 'Robert')
        }),
        knex('mate_preferences').insert({
          gender: ['male', 'female', 'non-binary'],
          sleep_habits: ['eary to bed', 'early to rise'],
          min_age: 30,
          max_age: 40,
          smoker_friendly: ['tobacco', '420'],
          weekday: '9-5ish',
          weekend: ['time to relax', 'invite some friends over for some fun'],
          kids: false,
          after_hours: ['maybe a bar, maybe a book'],
          user_id: knex('users').select('id').where('first_name', 'Tom')
        })
      ]);
    });
};
