// const Sequelize = require('sequelize');
const sequelize = require('../config/connection');
const { Sequelize } = require("sequelize/types");



class Post extends Model {}
Post.init({
    User:  Sequelize.STRING, 
    author: Sequelize.STRING,
    tag: Sequelize.STRING,
    Task: Sequelize.STRING,
}, {
    sequelize,
    modelName: 'Post'
}),

class Task extends Model {}
Task.init({
    User: Sequelize.STRING,
    author: Sequelize.STRING,
    tag: Sequelize.TEXT

}, {
    sequelize,
    modelName: 'task'
});










module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable('Post', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },

            // Timestamps
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        //},
    // down(queryInterface, Sequelize) => {
    //     return queryInterface.dropTable('my-table')
    // },
}),
module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('post', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: DataTypes.STRING,
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    }, 
    Task = sequelize.define('task', {
        type: type.STRING
    }, {
        freezeTableName: true,
    }),

    Post: associate = (models) => {
        Post.belongsTo(models.author);
    })

    return Post;
}