const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const admin = require("./../config/db");
require('dotenv').config();

app.use(express.json());

app.use(bodyParser.json()); // For parsing application/json

// Registration endpoint
app.post('/signup', (req, res) => {
  admin.auth().createUser({
    email: req.body.email,
    password: req.body.password,
    emailVerified: false,
    disabled: false
  })
  .then(userRecord => {
    console.log('Successfully created new user:', userRecord.uid);
    res.status(201).send('User created successfully');
  })
  .catch(error => {
    console.log('Error creating new user:', error);
    res.status(500).send('Error creating user');
  });
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});


module.exports = app;