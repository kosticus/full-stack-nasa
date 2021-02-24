const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'FILL_IN_ME',
  database: 'nasa'
});

module.exports = connection;