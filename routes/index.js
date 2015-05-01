var express = require('express');
var router = express.Router();
var dailiesfire = require('../models/dailiesfire')

/* GET home page */
router.get('/', function(req, res, next) {
  // TODO - render page and fill list asynchoronously instead
  dailiesfire.list(function(list) {
    res.render('index', { title: 'agile | daily standups', dailies: list })
  });
});

/* POST greeting partial */
router.post('/greeting', function(req, res, next) {
  req.session.nickname = req.body.nickname;
  res.render('partials/greeting')
});

module.exports = router;
