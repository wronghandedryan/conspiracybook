const {
    Sequelize,
    Model,
    DataTypes,
    BOOLEAN
} = require('sequelize');
const sequelize = new Sequelize('mysql::memory:');

class User extends Model {}
User.init({
    type: BOOLEAN,
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: DataTypes.STRING,
    password: DataTypes.STRING

}, {
    sequelize,
    modelName: 'user'
});{}

sequelize.sync()
    .then(() => User.create({
        username: 'janedoe',
        birthday: new Date(1980, 6, 20)
    }))
    .then(jane => {
        console.log(jane.toJSON());
    });
    User.hasOne('user');



module.exports = (sequelize, type) => sequelize.define('user', {
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: type.STRING
});