var production = require('./production.json');
// Express and path
var express = require('express');
var path = require('path');
// Cookie and session middleware
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
// Routes
var routes = require('./routes/index');
var users = require('./routes/users');
var about = require('./routes/about');
var login = require('./routes/login');
var welcome = require('./routes/welcome');
// Injection of JSON data in about page
about.production=production;
// Express Initialization
var app = express();
// view engine setup View folder and View engine to JADE
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// Definition of Path in public folder 
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
/*body-parser is a piece of express middleware that 
reads a form's input and stores it as a javascript
object accessible through `req.body` 
The extended argument allows to choose between parsing the urlencoded data
with the querystring library (when false) or the qs library (when true).
The "extended" syntax allows for rich objects and arrays to be encoded
into the urlencoded format, allowing for a JSON-like experience with urlencoded.
For more information, please see the qs library.*/
app.use(bodyParser.urlencoded({ extended: true }));
// The same for posting JSON
app.use(bodyParser.json());
// the session is stored in a cookie, so we use this to parse it
//must use cookieParser before expressSession
app.use(cookieParser());
app.use(expressSession({ secret: 'dmm888com', saveUninitialized: true, resave: true }));
// Using The routes
app.use('/', routes);
app.use('/users', users);
app.use('/about', about);
app.use('/login', login);
app.use('/welcome', welcome);
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
