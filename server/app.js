const express = require('express');
const bodyParser = require('body-parser');

const index = require('./routes/index');

const app = express();
const PORT = process.env.PORT || '3000';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);

app.listen(PORT, () => {
  console.log('Server started and listening on port', PORT);
});

module.exports = app;
