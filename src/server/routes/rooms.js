const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

router.get('/', (req, res, next) => {
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
        rooms: renderObject
      });
    }
  });
});

router.post('/', (req, res, next) => {
  let renderObject = {};
  let newRoom = {
    housing_type: req.body.housing_type;
    amenities: req.body.amenities;
    rent_cost: req.body.rent_cost;
    lease_length: req.body.lease_length;
    bedrooms: req.body.bedrooms;
    bathrooms: req.body.bathrooms;
    description: req.body.description;
    cross_street_1: req.body.cross_street_1;
    cross_street_2: req.body.cross_street_2;
    city: req.body.city;
    state: req.body.state;
    zip_code: req.body.zip_code;
    image: req.body.image;
  };
  queries.postItem('rooms', newRoom, (err, result) => {
    if (err) {
      renderObject.message = err.message || 'Sorry, there was an issue creating that room. Please try again.';
      res.json({
        error: renderObject
      });
    } else {
      renderObject.room = result;
      res.json({
        room: renderObject
      });
    }
  });
});

router.delete('/:id', (req, res, next) => {
  let renderObject = {};
  let roomId = req.params.id;
  queries.deleteOne('rooms', roomId, (err, result) => {
    if (err) {
      renderObject.message = err.message || 'Sorry, we had an issue finding that room. Please try again.';
      res.json({
        error: renderObject
      });
    } else {
      renderObject.room = result;
      res.json({
        room: renderObject
      });
    }
  });
});

module.exports = router;
