const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password#1',
  database: 'nasa'
});

module.exports = connection;