var db = require('./config');

function insertPhoto(picture, callback) {
  // A slightly different version to increase readability
  const queryString = `
    INSERT INTO images (title, explanation, url, date)
    VALUES (?, ?, ?, ?)
  `
  db.query(queryString, [ picture.title, picture.explanation, picture.url, picture.date ], function(error, results) {
    // handle error if one exists
    if (error) {
      // res.status(500).send('Failed to insert photo');
      // ^^ you cannot do this here, because there is no res! Nor do you want to pass res here -- maintain separation of concerns.

      console.error('Failed to insert photo in database', error); // Would be nice to log, so we can at least see what's happening
      callback(error, null);
    } else {
      // res.send(results);
      // ^^ same thing, you cannot do this here because there is no res!

      callback(null, results);
    }
  });
}

function getPhoto(date, cb) {
  db.query('SELECT * FROM images WHERE date = ?', [ date ], (err, results) => {
    if (err) {
      console.error('Failed to retrieve photo from database', error); // Would be nice to log, so we can at least see what's happening
      cb(err, null);
      return;
    }

    cb(null, results[0]);
    // ^^ results is in an array and for our purposes, we will assume there is always only one match
    // In real dev-land, we would most likely handle this differently, but that's a different conversation
  });
}

module.exports = {
  insertPhoto,
  getPhoto
}