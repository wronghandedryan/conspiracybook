var Sequelize = require('sequelize-mysql').sequelize
var postgres = require('sequelize-mysql').mysql

var db = new Sequelize('user_db', 'root', 'root', {
    dialect: 'mysql'
})


var models = [
    'user'
];

models.forEach(function (model) {
    module.exports[model] = db.import(__dirname + '/' + model);
});



exports.db = db;