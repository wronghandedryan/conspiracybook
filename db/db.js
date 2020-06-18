const Sequelize = require('sequelize');

var sequelize = new Sequelize("doxvfxz4qqsdi6tw", "j3pcyapnm78jdgvn", "w3oau02yfwjz6xvq", {
    host: 'm7nj9dclezfq7ax1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: '3306',
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