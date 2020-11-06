var express = require('express');
var path = require('path');
var axios = require('axios');
var app = express();
var db = require('./queries');
var port = 4000;

// Serving our React code for us!
app.use(express.static('client/dist'));

// GET request that responds with "hello"
// Our hard-coded route to test the server
app.get('/', function (request, response) {
  response.send('hello from the server!');
});

// GET request /api/picture that will send back the APOD
app.get('/api/picture/:date?', (req, res) => {
  // ^^ See the cool /:date? -- that means an optional query parameter
  // res.send('hello from picture'); -- hardcoded to test the route
  const date = req.params.date || formatDate(new Date()); // we'll set a default for the date to today, in case we aren't passed on

  // First try to fetch image from database and see if it exists
  // If it does not, THEN make the request to NASA and save in the database
  // Otherwise, just send it along

  // See how messy and nested the code is?
  // I would probably uses promises instead, as well as break up the functionality into helper functions
  // The next step would be to allow users to choose a date!
  db.getPhoto(date, function(e, r) {
    if (e) {
      console.error('e', e);
      res.status(500).send('Failed to retrieve photo');
    } else {
      if (r) {
        res.send(r);
        return;
      }

      // Failed to find an image in the database, go fetch it, and save it first
      axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response => {
          db.insertPhoto(response.data, (error, results) => {
            if (error) {
              res.status(500).send('Failed to insert photo and retrieve');
            } else {
              // Successfully insert picture, and we already have the picture, so just send it back.
              res.send(response.data);
            }
          });
        });
    }
  });


  // Remember, we'd probably want to include the actual API key in a config file that is not pushed to GitHub
  // This is the original code we had
  // axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  //   .then(function(response) {
  //     // console.log('what do we have here', response.data);
  //     res.send(response.data);
  //   })
  //   .catch(error => {
  //     console.error('Something went wrong fetching the photo :(', error);
  //     res.status(500).send('Something went wrong in get picture');
  //   });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}!`);
});

// Ugly function to do some date formatting for us
function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}