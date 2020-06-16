import Sequelize from 'sequelize'

var db = new Sequelize('conspbook_db', 'root', 'root', {
    dialect: 'mysql'
})


var models = [
    'Users'
];

models.forEach(function (_Users) {
    app.exports[model] = db.import(__dirname + '/' + 'user.js')
});



const _db = db;
export { _db as db };

module.exports('db');