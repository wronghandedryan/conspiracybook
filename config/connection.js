// Set up MySQL connection.
const Sequelize = require('sequelize');
var mysql = require('mysql');
// what is checkout? -RO
const { checkout } = require('../routes');

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'mysql'
})

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  host: 'localhost',
  port: 8889,
  user: 'root',
  password: 'root',
  database: 'conspbook_db'
});
}
// Make connection.
// added error handling but dont see in log? -RO
Sequelize(createConnection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
}));

Sequelize(dbConnection.end(function(err) {
  if (err) {
    return console.log('error:' + err.message);
  }
  console.log('Close the database connection.');
}));
// let connction = mysql.connction
//   function getConnectionStatus(){
//   if ({ retrun catch.err(console.log('db-connction failed'))
//   } else { 
//     console.log("db-connection succeess")
//   }};

// Export connection for our ORM to use.
module.exports = connection;
