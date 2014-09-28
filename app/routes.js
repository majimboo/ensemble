'use strict';

var filter = require('./filters');

module.exports.load = function (app) {

  // login
  app.get('/login', filter.isAuthenticated, function (req, res) {
    res.send('login');
  });

}
