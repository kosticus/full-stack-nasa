const connection = require('./config');

// SELECT * FROM photos WHERE date = '2021-10-20';

function getPhotoByDate(date, callback) {
  connection.query('SELECT * FROM photos WHERE date = ?', [ date ], function(error, photos) {
    if (error) {
      callback(error, null);
    } else {
      callback(null, photos);
    }
  });
}

module.exports = {
  getPhotoByDate
}