const Sequelize = require('sequelize');

const db = {}

const sequelize = new sequelize('conspbook_db', 'root', 'root'{
    host: "localhost",
    operatorAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 1000,
    }

})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db