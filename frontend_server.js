'use strict';

const log              = require('npmlog'),
      serveStatic      = require('serve-static'),
      path             = require('path'),
      ejs              = require('ejs'),
      express          = require('express'),
      request =         require('request');
      //bookingController = require('server-src/booking');

let app = express();

app.use('/bower_components', serveStatic(path.join(__dirname, 'src', '/bower_components')));
app.use('/static', serveStatic(path.join(__dirname, '/dist')));

app.get('/', function(req, res) {
    ejs.renderFile('dist/index.html', (err, html) => {
        if (err) {
            res.send(`<h3>Error.</h3>`);
            return;
        }
        res.send(html);
    });
});

app.get('/unplanned', function(req, res) {
    ejs.renderFile('dist/partials/unplanned/unplanned.html', (err, html) => {
        if (err) {
            res.send(`<h3>Error.</h3>`);
            return;
        }
        res.send(html);
    });
});

//app.get(`/api/booking/suggestions`, bookingController.getSuggestions);
//app.post(`/api/booking/createGift`, function(req,res) {

//});

app.listen(3000, function() {
  log.info('Server started and listening on port 3000');
  log.info('Environment is set to: ' + (process.env.NODE_ENV || 'default'));
});
