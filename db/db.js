const Sequelize = require('sequelize');

var sequelize = new Sequelize('conspbook_db', 'root', 'root', {
    host: '127.0.0.1',
    port: '8889',
    dialect: 'mysql'
});

var models = [
    'User',
    'author',
    'post',
    'tag'
];
module.exports = {}
models.forEach(function (name) {
    module.exports[name] = sequelize.import(__dirname + `/../models/${name}.js`);
});


//not sure!!!!!!!!!!!!!!!!
//const _db = db;
//export { _db as db };

// module.exports = db;
module.exports.sequelize = sequelize;