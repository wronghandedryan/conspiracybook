// // const db = require('sequelize-autoload');
// // db.load('./config/config.');

// // class User extends Model {}
// // Task.init({
// //     title: Sequelize.STRING,
// //     rating: {
// //         type: Sequelize.TINYINT,
// //         defaultValue: 3
// //     }
// // }, {
// //     sequelize,
// //     modelName: 'User'
// // });

// // // now instantiate an object
// // const task = User.build({
// //     title: 'very important task'
// // });

// // task.title // ==> 'very important task'
// // task.rating // ==> 3



// module.exports = {
//     User: (sequelize, type) => sequelize.define('user', {
//         id: {
//             type: type.STRING,
//             primaryKey: null,
//             autoIncrement: true
//         },
//         name: type.STRING
//     }),
//     Post: (sequelize, type) => sequelize.define('posts', {
//         id: {
//             type: type.INTEGER,
//             primaryKey: false,
//             autoIncrement: true
//         },
//         text: type.STRING
//     }),
//     author: (sequelize, type) => sequelize.define('author', {
//         id: {
//             type: type.STRING

//         }
//     }),
// } 

"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
  })
  .forEach(function(file) {
    var model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
