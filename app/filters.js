'use strict';

var filter = module.exports = {};

filter.isAuthenticated = function (req, res, next) {
  console.log('isAuth');
  next();
}
