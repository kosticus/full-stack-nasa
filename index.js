const { default: axios } = require('axios');
const { urlencoded } = require('body-parser');
const express = require('express');
const db = require('./database/queries');
const app = express();
const PORT = 3000;
const nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public/'));

/*
- Fetch the APOD from NASA
  - use something like Axios to make the AJAX request
    axios.get()
  - look at the response to figure out how to move forward
- Get to the client to then render on the page
- Render image
- Render date and title of the picture
*/

app.get('/api', (request, response) => {
  console.log('we have our first route');
  response.send('Hello from the API');
});

app.get('/api/apod', function(request, response) {
  // go fetch from NASA
  axios.get(nasaUrl)
    .then(res => {
      const picture = res.data;
      response.send(picture);
    })
    .catch(error => {
      console.error('Oh no!', error);
      response.status(500).send('Error retrieving APOD');
    });
});

// specify the date for apod
// '?api_key=DEMO_KEY'
// const myDate = '2021-10-08'
// `/api/apod/${myDate}`;
// '/api/apod/2021-10-10'
app.get('/api/apod/:date', (req, res) => {
  const date = '2021-10-10';
  db.getPhotoByDate(date, (error, photos) => {
    if (error) {
      res.status(500).send('Oh no, that did not work');
    } else {
      res.send(photos[0]);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})