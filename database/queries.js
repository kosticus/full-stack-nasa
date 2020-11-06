const connection = require('./config');

function testing(callback) {
  connection.query('SELECT * FROM photos', (error, photos) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, photos);
    }
  });
}

module.exports = {
  testing
};