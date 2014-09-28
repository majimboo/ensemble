'use strict';

var express = require('express');
var app     = express();
var path    = require('path');
var routes  = require('./app/routes');

// middlewares
app.use(express.static(path.join(__dirname, 'app', 'public')));

// load routes
routes.load(app);

app.listen(3000);
