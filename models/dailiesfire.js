var debug = require('debug')('agile-token-passer:models');
var Firebase = require("firebase");
var config = require('../utils/config');
var dailies = new Firebase(config.firebaseHost() + "/dailies");

/**
* Lists all dailies in JSON format.
* Queries firebase and passes JSON result
* to the callback function.
*/
exports.list = function(callback) {
  debug("Querying for Dailies list...");
  dailies.once("value", function(snapshot) {
    result = snapshot.val() !== null ? snapshot.val() : {};
    callback(result);
  });
};

/**
* Create a new daily only if it does not exist
* If daily already exists with the same label,
* then the callback is passed an error
*/
exports.new = function(label, callback) {
  dailies.child(label).once("value", function(snapshot) {
    if(snapshot.exists()) {
      callback(new Error(label + " exists!"));
    } else {
      dailies.child(label).set({"status" : "pending"}, function(error) {
        if (error) {
          debug("Sorry, daily could not be created." + error);
        } else {
          debug("Daily created successfully!");
        }
        callback(error);
      });
    }
  });
};

/**
* Delete the daily matching the given label
* The error object, if any, is passed to the callback
*/
exports.delete = function(label, callback) {
  dailies.child(label).once("value", function(snapshot) {
    if(snapshot.exists()) {
      dailies.child(label).set({}, function(error) {
        callback(error);
      });
    } else {
      callback(new Error(label + " does not exist!"));
    }
  });
};

module.exports = exports;
