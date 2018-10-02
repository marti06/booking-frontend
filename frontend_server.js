'use strict';

const log              = require('npmlog'),
      serveStatic      = require('serve-static'),
      path             = require('path'),
      express          = require('express');

var app = express();

app.use(express.static(__dirname + '/dist'));

app.listen(3000, function() {
  log.info('Server started and listening on port 3000');
  log.info('Environment is set to: ' + (process.env.NODE_ENV || 'default'));
});
