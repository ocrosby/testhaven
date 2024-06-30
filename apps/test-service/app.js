var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testsRouter = require('./routes/tests');

var app = express();

// Enable CORS
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/tests', testsRouter);

app.get('/health', function(req, res) {
  // In the context of Kubernetes, the /health endpoint is often used for liveness probes.
  // A liveness probe is a diagnostic performed to determine whether a specific
  // pod is running and healthy.  If the liveness probe fails (i.e., if the /health endpoint does not return a 200 status code),
  // Kubernetes knows that the pod is not healthy and needs to be restarted.
  res.status(200).send('OK');
});

app.get('/readiness', function(req, res) {
  // You can add checks here to verify that all services your application depends on are running correctly.
  // If everything is OK, send a 200 status code. Otherwise, send a 500 status code.
  res.status(200).send('OK');
});

// Error handling middleware
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;
