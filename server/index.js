const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;
const db = require('./queries.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/favorites', db.getAllFavorites);
app.post('/favorites', db.createFavorite);
app.delete('/favorites/:eventId', db.removeFavorite);

app.listen(PORT, () => {
  console.log(`Express is listening on port: ${PORT}`);
});

module.exports = app;