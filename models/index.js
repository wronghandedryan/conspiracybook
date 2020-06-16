const db = require('sequelize-autoload');
db.load('./config/config.');

class User extends Model {}
Task.init({
    title: Sequelize.STRING,
    rating: {
        type: Sequelize.TINYINT,
        defaultValue: 3
    }
}, {
    sequelize,
    modelName: 'User'
});

// now instantiate an object
const task = User.build({
    title: 'very important task'
});

task.title // ==> 'very important task'
task.rating // ==> 3



module.exports = {
    User: (sequelize, type) => sequelize.define('User', {
        id: {
            type: type.STRING,
            primaryKey: null,
            autoIncrement: true
        },
        name: type.STRING
    }),
    Post: (sequelize, type) => sequelize.define('posts', {
        id: {
            type: type.INTEGER,
            primaryKey: false,
            autoIncrement: true
        },
        text: type.STRING
    }),
    author: (sequelize, type) => sequelize.define('author', {
        id: {
            type: type.STRING

        }
    }),
} 

