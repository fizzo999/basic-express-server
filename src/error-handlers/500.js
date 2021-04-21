'use strict';

const errorHandler = (err, req, res, next) => {
  res.status(500).send('something went wrong and we were too lazy to put more info about WTF happened');
};

module.exports = errorHandler;
