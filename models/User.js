module.exports = (sequelize, type) => sequelize.define('user', {
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: type.STRING
});