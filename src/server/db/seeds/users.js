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
          gender: 'non-binary',
          sleep_habits: ['early riser', 'napper', 'early to bed'],
          image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?dpr=2&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=',
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
          image: 'https://images.unsplash.com/7/girl-flowers.jpg?dpr=2&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=',
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
          image: 'https://images.unsplash.com/photo-1475823678248-624fc6f85785?dpr=2&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=',
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
          image: 'https://images.unsplash.com/photo-1475664036920-14638cccb372?dpr=2&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=',
          age: 31,
          smoker_friendly: ['420'],
          weekday: 'day or night shift',
          weekend: ['time to relax'],
          kids: false,
          after_hours: ['netflix and chill']
        }),
        knex('users').insert({
          first_name: 'Brian',
          last_name: 'Harmon',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          gender: 'male',
          sleep_habits: ['night owl', 'sleep in', 'napper'],
          image: 'https://images.unsplash.com/photo-1470653503930-01819ee7ec83?dpr=2&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=',
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
          image: 'https://images.unsplash.com/photo-1476493279419-b785d41e38d8?dpr=2&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=',
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
          image: 'https://images.unsplash.com/photo-1445970389378-eb24802687f7?dpr=2&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=',
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
          image: 'https://images.unsplash.com/photo-1471224689211-8d9629bafd66?dpr=2&auto=format&fit=crop&w=1199&h=781&q=80&cs=tinysrgb&crop=',
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
          image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?dpr=2&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=',
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
