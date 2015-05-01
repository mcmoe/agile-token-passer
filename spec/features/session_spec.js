var Firebase = require("firebase");
var sessions = new Firebase(process.env.FIREHOST + "/sessions");
jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

const Zombie = require('zombie');

function clearSessions(done) {
  sessions.remove(function(error) {
    if(!error) {
      done();
    }
  });
}

describe('Connecting to the app for the first time', function(){

  beforeAll(function(done){
    clearSessions(done);
  });

  var browser;

  beforeEach(function(done){
    browser = new Zombie();
    browser.visit('/', done);
  });

  afterEach(function(done) {
    clearSessions(done);
  });

  it('should create a new session on firebase', function(done){
    sessions.on("child_added", function(snapshot) {
      session = snapshot.val();
      done();
    });
  });

  it('should set session expiry to a week', function(done) {
    var oneWeekInMillis = 604800000;
    sessions.on("child_added", function(snapshot) {
      var session = JSON.parse(snapshot.val().sess);
      expect(session.cookie.originalMaxAge).toBe(oneWeekInMillis);
      done();
    });

  });

});
