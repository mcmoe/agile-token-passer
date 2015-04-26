var express = require('express');
var router = express.Router();

/**
* Dailies CRUD routes
*/

/* CREATE a new daily standup - returns a render of its listing */
router.post('/', function(req, res, next) {
  res.render('partials/daily_info', { daily_name: req.body.daily_name })
});

/* READ a specific daily standup */
router.get('/:id', function(req, res, next) {
  res.render('daily', { title: 'agile | daily standups', id: req.params.id })
});

/* UPDATE - is there need for an update of a daily? */

/* DELETE a specific daily standup */
router.delete('/:id', function(req, res, next) {
  // TODO
});

module.exports = router;
