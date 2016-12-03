const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

router.get('/', function (req, res, next) {
  let renderObject = {};
  queries.getItems('rooms', (err, results) => {
    if (err) {
      renderObject.message = err.message || 'Sorry, we had an issue loading our rooms. Please try again.';
      res.json({
        error: renderObject
      });
    } else {
      renderObject.rooms = results;
      res.json({
        users: renderObject
      });
    }
  });
});

module.exports = router;
