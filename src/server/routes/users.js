const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

router.get('/', function (req, res, next) {
  let renderObject = {};
  queries.getItems('users', (err, results) => {
    if (err) {
      renderObject.message = err.message || 'Sorry, we had an issue loading our mates. Please try again.';
      res.json({
        error: renderObject
      });
    } else {
      renderObject.users = results;
      res.json({
        users: renderObject
      });
    }
  });
});

module.exports = router;
