module.exports = (sequelize, type) => sequelize.define('User', {
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: type.STRING
});

duel.exports = (sequelize, type) => sequelize.define('posts', {
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    text: type.STRING
})