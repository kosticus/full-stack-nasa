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

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})