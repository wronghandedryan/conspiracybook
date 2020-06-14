const Sequelize = require('sequelize');
const mysql = require('mysql');
const config = require('../config/database.js');

var db = new Sequelize('conspbook_db', 'root', 'root', {
    dialect: 'mysql'
})


var models = [
    'Users'
];

models.forEach(function (_Users) {
    app.exports[model] = db.import(__dirname + '/' + model);
});



exports.db = db;

module.exports('db');