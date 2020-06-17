// const Sequelize = require('sequelize');
module.exports = (sequelize, type) => {
    const Post = sequelize.define('Post', {
        title: type.STRING,
        content: type.STRING
        //Task: Sequelize.STRING,
    })

    Post.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Post.belongsTo(models.User, {
            foreignKey: "userId",
            as: "author",
            onDelete: "CASCADE",
        });
      };

      return Post;
}   










// module.exports = {
//     up(queryInterface, Sequelize) {
//         return queryInterface.createTable('Post', {
//             id: {
//                 type: Sequelize.INTEGER,
//                 primaryKey: true,
//                 autoIncrement: true,
//             },

//             // Timestamps
//             createdAt: Sequelize.DATE,
//             updatedAt: Sequelize.DATE,
//         //},
//     // down(queryInterface, Sequelize) => {
//     //     return queryInterface.dropTable('my-table')
//     // },
// }),
// module.exports = (sequelize, DataTypes) => {
//     const Post = sequelize.define('post', {
//         id: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         title: DataTypes.STRING,
//         content: {
//             type: DataTypes.TEXT,
//             allowNull: false
//         },
//     }, 
//     Task = sequelize.define('task', {
//         type: type.STRING
//     }, {
//         freezeTableName: true,
//     }),

//     Post: associate = (models) => {
//         Post.belongsTo(models.author);
//     })

//     return Post;
// }