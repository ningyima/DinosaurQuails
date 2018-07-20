const express = require('express');
const db = require('../db/index.js');
const app = require('./index.js');
const router = express.Router();

// const bcrypt = require('bcrypt-nodejs');

// app.use(bcrypt);

router.post('/signup', function(req, res) {
  //check for instance of user
  //if not, add new User to DB
  //Else render 'Username already taken' prompt
  // let user = {
  //   firstName: req.body.firstName,
  //   lastName: req.body.lastName,
  //   userName: req.body.userName,
  //   email: req.body.email,
  //   password: req.body.password
  // };

  // let user = {
  //   firstName: 'Ningyi',
  //   lastName: 'Ma',
  //   userName: 'nma',
  //   email: 'ningyi6@gmail.com',
  //   password: 'Welcome@123'
  // };

  db.createUser(user, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

router.get('/signup', function(req, res) {
  //render signup modal
  res.sendFile(path.join(__dirname, '../client/dist/signup.html'));
});

module.exports = router;
