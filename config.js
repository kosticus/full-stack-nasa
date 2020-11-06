var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'UPDATE ME',
  database: 'images'
});

connection.connect();

module.exports = connection;
// module.exports = {
//   connection: connection
// }
// ^^ Another way of exporting the connection, but not what we will use here