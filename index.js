const { urlencoded } = require('body-parser');
const express = require('express');
const db = require('./database/queries');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public/'));

app.get('/api', (request, response) => {
  console.log('we have our first route');
  response.send('Hello from the API');
});

app.get('/api/testing', function(req, res) {
  db.testing((error, photos) => {
    if (error) {
      console.error('An error occurred trying testing route');
      res.status(500).send('Oh no! An error occurred trying testing route');
      return;
    }

    console.log('What do we have here', photos);
    res.send(photos);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})