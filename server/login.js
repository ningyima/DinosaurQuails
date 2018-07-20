const db = require('../db/index.js');
const app = require('./index.js');
const login = require('express').Router();

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
  db.login(query, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      if (data.messageCode === 104 || data.messageCode === 103) {
        res.redirect('/login');
      } else {
        util.createSession(req, res, user);
        // res.json(data);
      }
    }
  });
});

module.exports = login;
