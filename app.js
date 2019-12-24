const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello world, this is Morta Della.<h1>');
});

app.listen(port, () => console.log(`The app is listening on port ${port}.`));

app.get('/statuscode', (req, res) => {
  res.set('X-custom-header', 'looks like this');
  res.status(418);
  res.send('I have a server')
});