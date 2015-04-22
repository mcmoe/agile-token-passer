var express = require('express');
var router = express.Router();

/* GET daily standup page. */
router.get('/', function(req, res, next) {
  res.render('daily', { title: 'agile | daily standups' })
});

module.exports = router;
