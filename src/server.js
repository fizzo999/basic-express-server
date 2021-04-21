'use strict';

const express = require('express');
const app = express();
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const notFound = require('./error-handlers/404.js');
const errors = require('./error-handlers/500.js');

app.use(express.json());

// app.use(logger);

app.get('/person', validator, logger, (req, res) => {
  // req.send({ name: req.query.name});
  console.log(req.query.name);
});

app.use('*', notFound);
app.use(errors);

module.exports = {
  app: app,
  start: port => {
    app.listen(port, () => {
      console.log(`Server is up and running on ${port}`);
    });
  }
}