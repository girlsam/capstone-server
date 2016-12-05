exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('rooms').del()
    .then(() => knex('users').del())
    .then(() => knex('mate_preferences').del())
    .then(() => knex('room_preferences').del());
};
