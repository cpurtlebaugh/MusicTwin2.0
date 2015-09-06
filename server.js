// requiring / loading all dependencies
var express         = require ('express'),
    app             = express(),
    path            = require ('path'),
    favicon         = require ('serve-favicon'),
    logger          = require ('morgan'),
    cookieParser    = require ('cookie-parser'),
    bodyParser      = require ('body-parser');

// check that MongoD is running
require('net').connect(27017, 'localhost').on('error', function(){
  console.log("you must BOW before da MongoD yo!");
  process.exit(0);
});

// loading routes defined by route's index file
var routes = require('./routes/index');

// load mongoose and connect to the DB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/MusicTwin2');

// // start running express and save the configruations
// // with the app variable
// var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// insert middleware that points to our route definitions

// DEFINED ROUTES ARE IN HERE >> routes, ie './routes/index'
app.use('/', routes);

// var apiRoutes = require('./app/routes/api')(app, express);
// app.use('/api', apiRoutes);

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


module.exports = app;
