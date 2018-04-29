const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;
const db = require('../queries');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/favorites/:userId', db.getAllFavorites);

app.listen(PORT, () => {
  console.log(`Express is listening on port: ${PORT}`);
});

module.exports = app;