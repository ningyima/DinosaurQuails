const express = require('express');
const db = require('../db/index.js');
const app = express();
const login = app.Router();

login.get('/login', function(req, res) {
  //render login page/modal
  res.sendFile(path.join(__dirname, '../client/dist/login.html'));
});

login.post('/login', function(req, res) {
  //send auth query to DB
  //if affirmed redirect to '/jobs'
});

module.exports = login;
