'use strict';

const log              = require('npmlog'),
      serveStatic      = require('serve-static'),
      path             = require('path'),
      ejs              = require('ejs'),
      express          = require('express'),
      cors             = require('cors'),
      bodyParser       = require('body-parser'),
      request          = require('request');

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
app.use(bodyParser.json());

const apiCORSHandler = cors({
                        uri: "http://ea05cd32.ngrok.io",
                        methods: 'GET, POST, PUT, OPTIONS, DELETE',
                        preflightContinue: true,
                        credentials: true,
                        origin: true
});
app.use(`/api/*`, apiCORSHandler);
app.post(`/api/booking/createUnplannedGift`, function(req,res) {
    request.post('http://ea05cd32.ngrok.io/createUnplannedGift', {json: req.body}, function(err, res, body){
        if (body.state === 200) {
            console.log('success');
            return {status: 200};
        } else {
            return {status: 500};
        }
    });
});

app.listen(3000, function() {
  log.info('Server started and listening on port 3000');
  log.info('Environment is set to: ' + (process.env.NODE_ENV || 'default'));
});
