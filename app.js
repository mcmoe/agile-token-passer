var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
FirebaseStore = require('connect-firebase')(session);

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// setup session configuration
var sessionOptions = {
  secret: 'if you use this code - change it!',
  resave: false,
  saveUninitialized: true
};

console.log("FIREHOST:", process.env.FIREHOST);
if(process.env.FIREHOST) {
  var options = {
    host: process.env.FIREHOST,
    //token: process.env.FIRETOKEN,
    reapInterval: 604800000 // 1 week in ms
  };
  sessionOptions['store'] = new FirebaseStore(options);
}
app.use(session(sessionOptions));


// allow access to the session variable in views
app.use(function(req,res,next){
    res.locals.session = req.session;
    next();
});


// declare the routes to use
app.use('/', routes);
app.use('/users', users);

// provide isAjax variable for Jade templates
app.use(function(req, res, next){
  console.log(req.headers)
  res.locals.isAjax =
    req.headers['x-requested-with'] &&
    req.headers['x-requested-with'] === 'XMLHttpRequest';
  next();
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
