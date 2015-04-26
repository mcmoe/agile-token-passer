var express = require('express');
var router = express.Router();

/* GET home page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'agile | daily standups' })
});

/* POST greeting partial */
router.post('/greeting', function(req, res, next) {
  req.session.nickname = req.body.nickname;
  res.render('partials/greeting')
});

module.exports = router;
