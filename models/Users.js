const Sequelize = require('sequelize');
const { sequelize } = require('mysql');
const db = require('../config/database.js');
const DataTypes = require('mysql');

// var app = sequelize.define('conspiracybook', {
//     id: sequelize.STRING,
//     user_name: sequelize.STRING,
//     first_name: sequelize.STRING,
//     last_name: sequelize.STRING,
//     email: sequelize.STRING,
//     passwordHash: sequelize.STRING,

// })
const user = db.Sequelize.define([
    'Users',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_name: {
            type: Sequelize.STRING
        },
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        passwordHash: {
            type: Sequelize.STRING
        },
        registeredAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        lastLogin: {
             type: Sequelize.STRING,
         },
        intro: {
              type: Sequelize.STRING,
          },
        profile: {
                type: Sequelize.STRING,
        },
    },
    {
        timestamps: false
    }

]);

module.exports