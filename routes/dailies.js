var express = require('express');
var router = express.Router();
var dailiesfire = require('../models/dailiesfire')

/**
* Dailies CRUD routes
*/

router.get('/list', function(req, res, next) {
  dailiesfire.list(function(list) {
    res.send(list)
  });
});

/* CREATE a new daily standup - returns a render of its listing */
router.post('/', function(req, res, next) {
  dailiesfire.new(req.body.daily_name, function(error) {
    if(!error) {
      res.render('partials/daily_info', { daily_name: req.body.daily_name });
    } else {
      res.status(403).send(error.message);
    }
  });
});

/* READ a specific daily standup */
router.get('/:id', function(req, res, next) {
  res.render('daily', { title: 'agile | daily standups', id: req.params.id })
});

/* TODO UPDATE - is there need for an update of a daily? */

/* DELETE a specific daily standup */
router.delete('/:id', function(req, res, next) {
  dailiesfire.delete(req.params.id, function(error) {
    if(!error) {
      res.send("delete successful");
    } else {
      res.status(403).send(error.message);
    }
  });
});

module.exports = router;
