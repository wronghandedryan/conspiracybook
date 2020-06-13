const Sequelize = require('sequelize');
const { sequelize } = require('.');
const db = require('../config/database.js');

module.exports = db.Sequelize.define([
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