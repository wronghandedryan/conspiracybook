const models = require('../models');
const express = require('express');
const { sequelize } = require('../models');
const router = express.Router();

router.get('/', function (req, res) {
    models.Users.findAll({
        include: [models.Task]
    }).then(function (users) {
        res.render('index', {
            title: 'Sequelize: Express Example',
            users: users
        });
    });
});

module.exports = router;
