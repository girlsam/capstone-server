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
          image: 'https://unsplash.com/search/portrait?photo=sibVwORYqs0',
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
          image: 'https://unsplash.com/search/portrait?photo=AHBiSKaENwc',
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
          image: 'https://unsplash.com/search/portrait?photo=dcZsxUAAJXs',
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
          image: 'https://unsplash.com/search/portrait?photo=pEBKUq_qZUk',
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
          image: 'https://unsplash.com/search/man?photo=gbaeHydpgtE',
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
          image: 'https://unsplash.com/search/portrait?photo=pAs4IM6OGWI',
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
          image: 'https://unsplash.com/search/portrait?photo=En-3vOTSOKk',
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
          image: 'https://unsplash.com/search/man?photo=Iqj71ucykVI',
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
          image: 'https://unsplash.com/search/man?photo=U22pJ6BclUQ',
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
