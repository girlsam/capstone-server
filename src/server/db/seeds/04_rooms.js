exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('rooms').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('rooms').insert({
          housing_type: 'condo',
          amenities: JSON.stringify(['off-street parking', 'dogs allowed', 'in-unit laundry']),
          rent_cost: 800,
          lease_length: 12,
          bedrooms: 2,
          bathrooms: 1,
          description: 'One bedroom available in this bright and airy end unit. Your bedroom is very spacious. Also in the house: 1 full bathroom, a nicely appointed kitchen and an open concept dining/living room. The backyard is a private oasis with big beautiful trees and professional landscaping. The complex is only 6 units with great neighbors, social front patios and well maintained grounds.',
          cross_street_1: 'Grant Ave',
          cross_street_2: '11th Ave',
          city: 'Denver',
          state: 'CO',
          zip_code: 80203,
          image: JSON.stringify(['http://photos.zillowstatic.com/p_f/ISivn2wqxtfsli0000000000.jpg', 'http://photos.zillowstatic.com/p_f/ISqdfqla1uemqk0000000000.jpg', 'http://photos.zillowstatic.com/p_f/ISi7de34xl6pqk0000000000.jpg', 'http://photos.zillowstatic.com/p_f/ISaplqdktl7vli0000000000.jpg', 'http://photos.zillowstatic.com/p_f/ISewlq4udi3eqk0000000000.jpg']),
          neighborhood: 'capitol hill'
        }),
        knex('rooms').insert({
          housing_type: 'apartment',
          amenities: JSON.stringify(['hardwood floors', 'central air']),
          rent_cost: 950,
          lease_length: 12,
          bedrooms: 2,
          bathrooms: 2,
          description: 'Come take a look inside this charming 2 bedroom 2 bath condo in the Capitol Hill neighborhood. One bedroom is available, and it has its own master bath. An assigned parking spot is also available. There is a full kitchen complete with refrigerator, stove, dishwasher, microwave, garbage disposal and pantry for extra storage. Spacious living room, lovely hardwood and carpet flooring throughout, ceiling fan and walk-in closets add a sense of style you will enjoy coming home to. There is a laundry room on-site!',
          cross_street_1: 'Ogden St',
          cross_street_2: 'E 12th Ave',
          city: 'Denver',
          state: 'CO',
          zip_code: 80203,
          image: JSON.stringify( ['http://photos.zillowstatic.com/p_f/ISal2hequ0opel1000000000.jpg', 'http://photos.zillowstatic.com/p_f/ISqdn4ug1g29fl1000000000.jpg', 'http://photos.zillowstatic.com/p_f/ISewt4d0e4r0fl1000000000.jpg']),
          neighborhood: 'capitol hill'
        }),
        knex('rooms').insert({
          housing_type: 'single-family home',
          amenities: JSON.stringify(['in-unit laundry', 'cats allowed', 'dogs allowed', 'off-street parking', 'in-unit laundry']),
          rent_cost: 600,
          lease_length: 6,
          bedrooms: 3,
          bathrooms: 2,
          description: 'Two bedrooms available in this Baker home. One has its own master bathroom and fireplace. High ceilings, updated kitchen with granite and stainless appliances, hard wood floors. Very charming.',
          cross_street_1: 'Bannock St',
          cross_street_2: 'W Second Ave',
          city: 'Denver',
          state: 'CO',
          zip_code: 80223,
          image: JSON.stringify(['http://photos.zillowstatic.com/p_f/ISq1aaol2gwmhq0000000000.jpg', 'http://photos.zillowstatic.com/p_f/IS6uux3c9va6iq0000000000.jpg', 'http://photos.zillowstatic.com/p_f/IS6eeyoyawchhq0000000000.jpg', 'http://photos.zillowstatic.com/p_f/ISm6zl4phbr0iq0000000000.jpg']),
          neighborhood: 'baker',
          user_id: knex('users').select('id').where('first_name', 'James')
        }),
        knex('rooms').insert({
          housing_type: 'single-family home',
          amenities: JSON.stringify(['backyard', 'dogs allowed', 'in-unit laundry', 'storage', 'fenced yard']),
          rent_cost: 700,
          lease_length: 12,
          bedrooms: 2,
          bathrooms: 1,
          description: 'charming bungalow in the popular Highlands Neighborhood. Enjoy the bright, open kitchen layout. Relax in the front sun room. Get your hands dirty in the garden. Your bedroom is on the lower level which has a large living room plus its own full bathroom. You would also have your own private entry. Live on a nice, quiet block that has a ton of character and charm!',
          cross_street_1: 'Osage St.',
          cross_street_2: 'W 40th Ave',
          city: 'Denver',
          state: 'CO',
          zip_code: 80211,
          image: JSON.stringify(['http://photos.zillowstatic.com/p_f/ISa9dhoayc3vq51000000000.jpg']),
          neighborhood: 'sunnyside',
          user_id: knex('users').select('id').where('first_name', 'Ashley')
        }),
        knex('rooms').insert({
          housing_type: 'apartment',
          amenities: JSON.stringify(['hardwood floors', 'central air', 'cats allowed', 'dogs allowed', 'pool', 'fitness center']),
          rent_cost: 950,
          lease_length: 8,
          bedrooms: 2,
          bathrooms: 1,
          description: 'My roommate had to move away for work, so I have a bedroom available in my apartment. It\'s a large apartment community that is centrally located in the Ballpark neighborhood of downtown Denver, between the Central Business District and RiNo. Only half of a mile to the Union Station RTD Light Rail and easy access to I-70 and I-25. The unit is very clean and has a small patio. Your room is off the living room and faces north. Come check it out!',
          cross_street_1: 'Market St',
          cross_street_2: 'E 21st Ave',
          city: 'Denver',
          state: 'CO',
          zip_code: 80205,
          image: JSON.stringify(['http://photos.zillowstatic.com/p_f/ISq9c5s5ijj0ji0000000000.jpg', 'http://photos.zillowstatic.com/p_f/ISax7hrs9336ji0000000000.jpg', 'http://photos.zillowstatic.com/p_f/ISuk3tqf1nmbji0000000000.jpg']),
          neighborhood: 'lodo'
        }),
        knex('rooms').insert({
          housing_type: 'single-family home',
          amenities: JSON.stringify(['in-unit laundry', 'cats allowed', 'dogs allowed', 'off-street parking', 'in-unit laundry', 'bike storage']),
          rent_cost: 700,
          lease_length: 12,
          bedrooms: 2,
          bathrooms: 1,
          description: 'Classic Victorian row home has been completely renovated and lives very large. Great location! Walking distance to restaurants and shops. Five blocks from Washington Park. Over 1000 finished sqft on 2 levels. Great open living space with hardwood floors, working fireplace, updated granite kitchen and bath.',
          cross_street_1: 'S Marion Pkwy',
          cross_street_2: 'E Virginia Ave',
          city: 'Denver',
          state: 'CO',
          zip_code: 80209,
          image: JSON.stringify(['http://photos.zillowstatic.com/p_f/ISx3t0iua9g5du1000000000.jpg', 'http://photos.zillowstatic.com/p_f/IS9lm0zaykrddu1000000000.jpg', 'http://photos.zillowstatic.com/p_f/IS5q7ho1sp4j7u1000000000.jpg']),
          neighborhood: 'washington park'
        })
      ]);
    });
};
