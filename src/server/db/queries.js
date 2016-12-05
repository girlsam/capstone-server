const knex = require('./knex.js');

exports.getItems = function(tableName, callback, itemId) {
  if (itemId) {
    knex(tableName)
    .where('id', itemId)
    .then(result => {
      if (result.length) {
        callback(null, result);
      }
      else {
        callback(1);
      }
    }).catch(err => {
      callback(err);
    });
  } else {
    knex(tableName)
    .then(results => {
      callback(null, results);
    }).catch(err => {
      callback(err);
    });
  }
};

exports.getRooms = (callback) => {
  knex('rooms')
  .select('*')
  .join('users', 'users.id', '=', 'rooms.user_id')
  .then(result => {
    callback (null, result);
  })
  .catch(err => {
    callback(err);
  });
};

exports.postItem = (tableName, object, callback) => {
  knex(tableName)
  .insert(object)
  .then(result => {
    callback (null, result);
  }).catch(err => {
    callback(err);
  });
};

exports.deleteOne = (tableName, itemId, callback) => {
  knex(tableName)
  .del()
  .where('id', itemId)
  .then(result => {
    callback(null, result);
  }).catch(err => {
    callback(err);
  });
};
