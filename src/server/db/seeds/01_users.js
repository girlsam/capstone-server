exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
          first_name: 'Tom',
          last_name: 'Eubank',
          description: 'Aliquam getting paid well holla whenever that stop, sometimes I wish the same quia fuga et voluptate. Sit ut suscipit fugit dolores tempora beatae. Voluptatem and that\'s when she text me. I\'ll be there for you, I will care for you you already know though hic voluptatem eaque quia.',
          gender: 'non-binary',
          morning_sleep: 'Early to rise',
          night_sleep: 'Early to bed',
          image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?dpr=2&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=',
          age: 22,
          smoker_friendly: '420 and tobacco',
          weekday: '9-5ish',
          weekend: 'Time to relax',
          after_hours: 'Netflix and chill'
        }),
        knex('users').insert({
          first_name: 'Kelly',
          last_name: 'Wright',
          description: 'Cat ipsum dolor sit amet, hunt anything that moves or hopped up on goofballs hide when guests come over. Hide when guests come over intrigued by the shower, or stare at ceiling climb leg for stretch and use lap as chair. Hunt anything that moves flop over, leave dead animals as gifts for chase imaginary bugs, chase mice for stare at ceiling yet hopped up on goofballs.',
          gender: 'female',
          morning_sleep: 'Early to rise',
          night_sleep: 'Night owl',
          image: 'https://images.unsplash.com/7/girl-flowers.jpg?dpr=2&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=',
          age: 29,
          smoker_friendly: '420',
          weekday: 'it varies',
          weekend: 'Invite some friends over for some fun',
          after_hours: 'Every night is friday night'
        }),
        knex('users').insert({
          first_name: 'Ashley',
          last_name: 'Fisher',
          description: 'I am one of those that never take on about princely fortunes, and am quite content if the world is ready to board and lodge me, while I am putting up at this grim sign of the Thunder Cloud. Upon the whole, I thought that the 275th lay would be about the fair thing, but would not have been surprised had I been offered the 200th, considering I was of a broad-shouldered make.',
          gender: 'female',
          morning_sleep: 'Sleep-in',
          night_sleep: 'Night owl',
          image: 'https://images.unsplash.com/photo-1475823678248-624fc6f85785?dpr=2&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=',
          age: 33,
          smoker_friendly: 'Nope',
          weekday: 'It Varies',
          weekend: 'In the mountains',
          after_hours: 'Maybe a bar, maybe a book'
        }),
        knex('users').insert({
          first_name: 'James',
          last_name: 'Cosgrove',
          description: 'Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit. Nizzle sapien velizzle, bling bling volutpat, suscipit , gravida vel, arcu. Check it out hizzle that\'s the shizzle. We gonna chung erizzle. Fo izzle dolor fo turpis tempizzle tempor. Gangsta boom shackalack mofo et turpizzle. Sizzle izzle tortor. Pellentesque uhuh ... yih!',
          gender: 'male',
          morning_sleep: 'Early to rise',
          night_sleep: 'Early to bed',
          image: 'https://images.unsplash.com/photo-1475664036920-14638cccb372?dpr=2&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=',
          age: 31,
          smoker_friendly: '420',
          weekday: 'Day or night shift',
          weekend: 'Time to relax',
          after_hours: 'Netflix and chill'
        }),
        knex('users').insert({
          first_name: 'Brian',
          last_name: 'Harmon',
          description: 'Est Schlitz shoreditch fashion axe. Messenger bag cupidatat Williamsburg sustainable aliqua, artisan duis pickled pitchfork. Semiotics Banksy ad roof party, jean shorts selvage mollit vero consectetur hashtag before they sold out blue bottle qui nihil aute. Aliquip artisan retro squid ullamco. Vegan enim Williamsburg, eu umami shabby chic single-origin coffee et.',
          gender: 'Male',
          morning_sleep: 'Sleep-in',
          night_sleep: 'Night owl',
          image: 'https://images.unsplash.com/photo-1470653503930-01819ee7ec83?dpr=2&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=',
          age: 29,
          smoker_friendly: 'Tobacco',
          weekday: 'Day or night shift',
          weekend: 'in the mountains',
          after_hours: 'Every night is friday night'
        }),
        knex('users').insert({
          first_name: 'Sarah',
          last_name: 'Anthony',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          gender: 'Female',
          morning_sleep: 'Early to rise',
          night_sleep: 'Early to bed',
          image: 'https://images.unsplash.com/photo-1476493279419-b785d41e38d8?dpr=2&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=',
          age: 24,
          smoker_friendly: 'Nope',
          weekday: '9-5ish',
          weekend: 'Time to relax',
          after_hours: 'Maybe a bar, maybe a book'
        }),
        knex('users').insert({
          first_name: 'Fatimah',
          last_name: 'Edwards',
          description: 'I would like to give you a backstage pass to my imagination. This is just common superficiality. Is thats whats so special about a woman? Superficiality with their face colours? The magic Indian is a mysterious spiritual force, and we\'re going to Cathedral Rock, and that\'s the vortex of the heart.',
          gender: 'female',
          morning_sleep: 'Sleep in',
          night_sleep: 'Night Owl',
          image: 'https://images.unsplash.com/photo-1445970389378-eb24802687f7?dpr=2&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=',
          age: 23,
          smoker_friendly: '420',
          weekday: 'It varies',
          weekend: 'What\'s a weekend',
          after_hours: 'Every night is friday night'
        }),
        knex('users').insert({
          first_name: 'Robert',
          last_name: 'Parker',
          description: 'CrackBerry, in the main gorgeous that so-called “iPad killer” in my opinion iPhone rip-offs, while profit, consequently MacBook Air is just beautiful in the end battery drain so Android geek, I think Apple will only get better, in addition iTunes makes it easy, another point is that Flash sucks whereas Android is fragmented.',
          gender: 'male',
          morning_sleep: 'Early to rise',
          night_sleep: 'Night Owl',
          image: 'https://images.unsplash.com/photo-1471224689211-8d9629bafd66?dpr=2&auto=format&fit=crop&w=1199&h=781&q=80&cs=tinysrgb&crop=',
          age: 27,
          smoker_friendly: 'Tobacco',
          weekday: 'Day or night shift',
          weekend: 'Time to relax',
          after_hours: 'Maybe a bar, maybe a book'
        }),
        knex('users').insert({
          first_name: 'Ray',
          last_name: 'Mitchell',
          description: 'For those who have seen the Earth from space, and for the hundreds and perhaps thousands more who will, the experience most certainly changes your perspective. The things that we share in our world are far more valuable than those which divide us',
          gender: 'male',
          morning_sleep: 'Early to rise',
          night_sleep: 'Early to bed',
          image: 'https://images.unsplash.com/photo-1476657680631-c07285ff2581?dpr=2&auto=format&fit=crop&w=1199&h=845&q=80&cs=tinysrgb&crop=',
          age: 34,
          smoker_friendly: 'Nope',
          weekday: '9-5ish',
          weekend: 'Invite some friends over for some fun',
          after_hours: 'Netflix and chill'
        })
      ]);
    });
};
