const express = require('express');
const db = require('../db/index.js');
const app = require('./index.js');
// const application = express();
const login = express.Router();

login.get('/login', function(req, res) {
  //render login page/modal
  res.sendFile(path.join(__dirname, '../client/dist/login.html'));
});

login.post('/login', function(req, res) {
  //send auth query to DB
  //if affirmed redirect to '/jobs'
  let query = {
    email: req.body.email,
    password: req.body.password
  };
  db.login(query, (err, user) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(user);
    }
  });
});

module.exports = login;
