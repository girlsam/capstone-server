exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
          first_name: 'Tom',
          last_name: 'Eubank',
          description: 'Health Conscious Coach who illuminates consciousness within each person through nutrition. He creates amazing synergies with food and is called the \'Food Alchemist\'. He loves blinging out tastebuds with his fantastic meals. He uses intuition to guide people to a new paradigm of living. Mother Earth brings him grounding and peace. His heart is kind and genuine. Outdoor activities is also where he finds bliss.',
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
          description: 'I am a friendly, mellow adult female and just completed my last student fieldwork term in a healthcare profession.I would prefer to have a roommate who is open to having pleasant conversations with some occasional socializing. I\'m looking for a room to rent in an apartment or in a townhome community. I do need internet access, but can purchase my own internet account.',
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
          description: 'I am a 33 y.o. female with a well behaved pup (Mochi). I work downtown (usually 8am-5pm or 6pm). Looking for someone who preferably has a dog so Mochi has a playmate and we can help eachother out with walks, feeding, trips etc. but that obviously isn\'t mandatory. However, you MUST like dogs. I am active, clean, responsible. Not a big partier but like to go out for drinks, brunch, dinner etc or stay in and cook/veg out. NO Smoking. I do not typically take part in the smoking part of 420...not against it on occasion outside.',
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
          description: 'I\'m an engineer working outside of Boulder looking to rent a room or basement in the area. I am clean, quiet, responsible, pet-free, and not a partier. I spend quite a bit of time in the mountains on the weekends and just want a nice place to come "home" to after work.',
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
          description: 'I am a 29 yr old male who works a regular schedule and travels quite a bit (2-3x month). I would like to rent a space in your town-home, apartment, or house. I have all of my own furniture and no pets. I am looking to move closer to the city. I work in the Energy Technology sector and am very active; enjoy Hiking, Weight lifting, running, Camping, MTB, Skiing...shocking I know. I enjoy checking out a brewery and am not much into the party scene these days. - I don\'t partake in 420, I have no issue with people who use it occasionally.',
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
          description: 'I\'m a very social individual that\'s from a big city, and after 3 years of having a very limited social life due to my work hours and area I\'ve been working in, I decided to look for work in the same industry but close to big city to work on having a better work/life balance. If you have any further questions, feel free to contact me via email. Btw, I\'m allergic to cats.',
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
          description: 'I work with children. I also have a deep connection with mother earth and adores plants and animals. I\'ve trained horses for numerous years and has learned to communicate with them beyond a stereotypical manner. Very active and loves just about anything outdoors...skiing, canoeing, biking, climbing, hiking... Loves making natural remedies and crafting with natural materials.',
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
          description: 'Hey! I am looking for a place to move into in Denver or Boulder after Christmas. Whether you have a room, or wanted to rent something together. Cool either way. Trying not to spend more than $650 a month on rent. I\'m in my mid 20s. Outgoing and fun. I am animal and 420 friendly. I do not have any animals of my own. I am an active guy and outdoor enthusiast, and looking to find another similar roommate. I enjoy hiking, camping, skiing, and spontaneous road trips. It\'d be cool to find a guy with similar interests. I am also most comfortable at home when nude or in my undies, so I\'d prefer my roommate to also be somewhat of a naturist.',
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
