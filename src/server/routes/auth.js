let express = require('express');
let router = express.Router();
let bcrypt = require('bcryptjs');
let knex = require('knex');

router.post('/login', (req, res, next) => {
  console.log('here');
  let password = req.body.password;
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(password, salt);
  knex('users')
  .insert({
    email: req.body.email,
    password: hash
  })
  .then((newUser) => {
    res.json({
      result: 'Login Successful'
    });
  })
  .catch((err) => {
    res.status(404).send({
      status: 'Failed',
      message: err
    });
  });
});
