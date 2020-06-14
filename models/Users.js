//const Sequelize = require('sequelize');
//const db = require('../config/database.js');
const mysql = require('mysql2');
//const multer = require('multer');
const app = require('../app.js');
const { TIMESTAMP } = require('mysql2/lib/constants/types');
const Umzug = require('umzug');
const { Sequelize } = require("sequelize");
const { SequelizeStorage } = require("umzug");

const db = require('db.Sequelize');
const Users = users();
const config = require('../config/config.js');

const sequelize = Sequelize({
    dialect: 'mysql',
    storage: '../db/schema.sql'
});

const umzug = new Umzug({
    migrations: {
        path: './migrations',
        params: [
            sequelize.getQueryInterface()
        ]
    },
    storage: new SequelizeStorage({
        sequelize
    })
});

(async () => {
    // Checks migrations and run them if they are not already applied. To keep
    // track of the executed migrations, a table (and sequelize model) called SequelizeMeta
    // will be automatically created (if it doesn't exist already) and parsed.
    await umzug.up();
})();

const Users = db.Sequelize.define('Users.js', {
    id: Sequelize.STRING,
    user_name: Sequelize.STRING,
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    email: Sequelize.STRING,
    passwordHash: Sequelize.STRING,
    registeredAt: Sequelize.DATE,
    lastLogin: Sequelize.STRING,
    intro: Sequelize.STRING,
    profile: Sequelize.STRING,
})
// const Users = db.Sequelize.define([
//     'Users',
//     {
//         id: {
//             type: Sequelize.INTEGER,
//             primaryKey: true,
//             autoIncrement: true,
//         },
//         user_name: {
//             type: Sequelize.STRING
//         },
//         first_name: {
//             type: Sequelize.STRING
//         },
//         last_name: {
//             type: Sequelize.STRING
//         },
//         email: {
//             type: Sequelize.STRING
//         },
//         passwordHash: {
//             type: Sequelize.STRING
//         },
//         registeredAt: {
//             type: Sequelize.DATE,
//             defaultValue: Sequelize.NOW
//         },
//         lastLogin: {
//              type: Sequelize.STRING,
//          },
//         intro: {
//               type: Sequelize.STRING,
//           },
//         profile: {
//                 type: Sequelize.STRING,
//         },
//     },
//     {
//         timestamps: false
//     }

// ]);

// module.exports;