var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'agile | daily standups' })
});

/* GET daily standup page. */
router.get('/daily', function(req, res, next) {
  res.render('daily', { title: 'agile | daily standups' })
});

module.exports = router;
