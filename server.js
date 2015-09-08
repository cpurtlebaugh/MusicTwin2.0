var express    = require('express');    // call express
var app        = express();         // define our app using express
var bodyParser = require('body-parser');  // get body-parser
var morgan     = require('morgan');     // used to see requests
var mongoose   = require('mongoose');
var config     = require('./config');
var path       = require('path');

require('net').connect(27017, 'localhost').on('error', function() {
  console.log("YOU MUST BOW BEFORE THE MONGOD FIRST, MORTAL!");
  process.exit(0);
});

// APP CONFIGURATION ==================
// use body parser so we can grab information from POST requests

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure our app to handle CORS requests

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});


// log all requests to the console
app.use(morgan('dev'));

// load mongoose and connect to a database
mongoose.connect(config.database);

// // set static files location
// // used for requests that our frontend will make
app.use(express.static(__dirname + './public'));

// ROUTES FOR API =================

// API ROUTES ------------------------
var apiRoutes = require('./app/routes/api')(app, express);
app.use('/api', apiRoutes);


// MAIN CATCHALL ROUTE ---------------
// SEND USERS TO FRONTEND ------------
// has to be registered after API ROUTES
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


app.listen(config.port);
console.log('Magic happens on port ' + config.port);

