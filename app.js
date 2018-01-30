const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Example app listening at localhost:3000');
});

// Root app
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', function (req, res) {
  res.send('Got a POST request');
});

// Users resource
app.put('/users', function (req, res) {
  res.send('Got a PUT request at /users');
});

app.delete('/users', function (req, res) {
  res.send('Got a DELETE request at /users');
});
