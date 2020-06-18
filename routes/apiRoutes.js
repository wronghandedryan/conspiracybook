
const router = require('express').Router();
const app = require('user.js');
const sequelize = require('sequelize');
const bodyparser = require('body-parser');
const connection = require('../config/connection');
const User = require("../models/user.js");

// Find log in info
router.post('/login', (req, res) => {
connection.sync().then(() => {
    User.findOne({ where: { username: req.body.username } }).then(user => {
      let data = {
        name: user.name,
        location: user.location,
      }
      console.log(data);
      res.render('index', data)
      })
    });
  });

module.exports = router;