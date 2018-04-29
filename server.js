const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express(),
  subpath = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use('/api', subpath);

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.listen(process.env.PORT || 8080);