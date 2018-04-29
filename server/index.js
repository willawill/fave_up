const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/favorites/:userId', (req, res, next) => {
  return res.json({ favorites: [1, 2, 3] });
});

app.listen(PORT, () => {
  console.log(`Express is listening on port: ${PORT}`);
});

module.exports = app;