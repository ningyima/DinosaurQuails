const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dinasour');

const db = mongoose.connection;

db.on('error', function() {
  console.log('error');
});

db.once('open', function() {
  console.log('Server connected');
});

//TODO: ADD USER SCHEMA
let userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  userName: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String
});

//TODO: ADD USER MODEL for user db
let User = mongoose.model('User', userSchema);

let createUser = (user, callback) => {
  User.findOne({ email: user.email }, (err, existingUser) => {
    if (err) {
      callback(err, null);
    }

    if (existingUser) {
      if (existingUser.email === user.email) {
        callback(null, { messageCode: 101, message: 'User email already exists' });
      } else if (existingUser.userName === user.userName) {
        callback(null, { messageCode: 102, message: 'User name already exists' });
      }
    } else {
      let user_obj = {
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        email: user.email,
        password: user.password
      };

      let newUser = new User(user_obj);
      newUser.save((err, savedUser) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, savedUser);
        }
      });
    }
  });
};

let login = (query, callback) => {
  User.findOne({ email: query.email }, (err, user) => {
    if (err) {
      callback(err, null);
    }

    if (!user) {
      callback(null, { messageCode: 103, message: 'User does not exist' });
    } else {
      callback(null, user);
    }
  });
};

// ADD JOB SCHEMA
let jobSchema = mongoose.Schema({
  userId: String,
  company: {
    name: String,
    jobTitle: String,
    webSite: String
  },
  contact: {
    email: String,
    phone: String,
    recruiter: String
  },
  postDate: Date,
  appliedDate: Date,
  interviewedDate: Date,
  coverLetterUrl: String,
  state: String
});

// ADD JOB MODEL
let Job = mongoose.model('Job', jobSchema);

//EXPORT MODELS

// module.exports.db = db;
module.exports.createUser = createUser;
module.exports.login = login;
