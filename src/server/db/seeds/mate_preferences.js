exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
          first_name: 'Tom',
          last_name: 'Eubank',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          gender: 'male',
          sleep_habits: ['early riser', 'napper', 'early to bed'],
          image: 'http://www.clker.com/cliparts/A/Y/O/m/o/N/placeholder-hi.png',
          age: 22,
          smoker_friendly: ['420', 'tobacco'],
          weekday: '9-5ish',
          weekend: ['in the mountains', 'time to relax'],
          kids: false,
          after_hours: ['netflix and chill', 'i workout', 'maybe a bar, maybe a book']
        }),
        knex('users').insert({
          first_name: 'Kelly',
          last_name: 'Wright',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          gender: 'female',
          sleep_habits: ['night owl', 'napper'],
          image: 'https://usminteractive.com/wp-content/uploads/2016/08/placeholder-person-380x380.jpg',
          age: 29,
          smoker_friendly: ['420'],
          weekday: ['it varies'],
          weekend: ['in the mountains', 'invite some friends over for some fun'],
          kids: false,
          after_hours: ['every night is friday night', 'i workout']
        }),
        knex('users').insert({
          first_name: 'Ashley',
          last_name: 'Fisher',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          gender: 'female',
          sleep_habits: ['night owl', 'sleep in'],
          image: 'https://usminteractive.com/wp-content/uploads/2016/08/placeholder-person-380x380.jpg',
          age: 33,
          smoker_friendly: ['nope'],
          weekday: ['it varies'],
          weekend: ['in the mountains', 'time to relax'],
          kids: true,
          after_hours: ['maybe a bar, maybe a book']
        }),
        knex('users').insert({
          first_name: 'James',
          last_name: 'Cosgrove',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          gender: 'male',
          sleep_habits: ['early to rise', 'napper'],
          image: 'http://www.clker.com/cliparts/A/Y/O/m/o/N/placeholder-hi.png',
          age: 31,
          smoker_friendly: ['420'],
          weekday: 'day or night shift',
          weekend: ['time to relax'],
          kids: false,
          after_hours: ['netflix and chill']
        }),
        knex('users').insert({
          first_name: 'Brian',
          last_name: 'Hammond',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          gender: 'male',
          sleep_habits: ['night owl', 'sleep in', 'napper'],
          image: 'http://www.clker.com/cliparts/A/Y/O/m/o/N/placeholder-hi.png',
          age: 29,
          smoker_friendly: ['420', 'tobacco'],
          weekday: 'day or night shift',
          weekend: ['in the mountains', 'time to relax'],
          kids: false,
          after_hours: ['every night is friday night']
        }),
        knex('users').insert({
          first_name: 'Sarah',
          last_name: 'Anthony',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          gender: 'female',
          sleep_habits: ['early to bed', 'early to rise'],
          image: 'https://usminteractive.com/wp-content/uploads/2016/08/placeholder-person-380x380.jpg',
          age: 24,
          smoker_friendly: ['nope'],
          weekday: ['9-5ish'],
          weekend: ['relax'],
          kids: false,
          after_hours: ['netflix and chill', 'maybe a bar, maybe a book']
        }),
        knex('users').insert({
          first_name: 'Fatimah',
          last_name: 'Edwards',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          gender: 'female',
          sleep_habits: ['night owl', 'napper'],
          image: 'https://usminteractive.com/wp-content/uploads/2016/08/placeholder-person-380x380.jpg',
          age: 23,
          smoker_friendly: ['420'],
          weekday: 'it varies',
          weekend: ['work work work'],
          kids: false,
          after_hours: ['every night is friday night']
        }),
        knex('users').insert({
          first_name: 'Robert',
          last_name: 'Parker',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          gender: 'male',
          sleep_habits: ['night owl', 'early to rise'],
          image: 'http://www.clker.com/cliparts/A/Y/O/m/o/N/placeholder-hi.png',
          age: 27,
          smoker_friendly: ['tobacco'],
          weekday: ['day or night shift'],
          weekend: ['relax', 'in the mountains'],
          kids: false,
          after_hours: ['maybe a bar, maybe a book']
        }),
        knex('users').insert({
          first_name: 'Ray',
          last_name: 'Mitchell',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          gender: 'male',
          sleep_habits: ['eary to bed', 'early to rise'],
          image: 'http://www.clker.com/cliparts/A/Y/O/m/o/N/placeholder-hi.png',
          age: 34,
          smoker_friendly: ['tobacco'],
          weekday: '9-5ish',
          weekend: ['time to relax', 'invite some friends over for some fun'],
          kids: false,
          after_hours: ['netflix and chill', 'maybe a bar, maybe a book']
        })
      ]);
    });
};
