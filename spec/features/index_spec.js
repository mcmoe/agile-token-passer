const Zombie = require('zombie');
Zombie.waitDuration = "30s";

jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

describe('Displaying the main page', function(){
  var browser;

  beforeEach(function(done){
    browser = new Zombie();
    browser.visit('/', done);
  });

  it('allows user to choose a nickname', function(){
    browser.assert.element('#nickname');
    browser.assert.attribute('#nickname', 'placeholder', "Choose your name...");

    browser.assert.element('#nickname-button');
  });

  describe('and choosing your name', function(){
    beforeEach(function(done){
      browser
        .fill('#nickname', 'jasmine')
        .pressButton('#nickname-button', done);
    });

    it('should greet you with your chosen name', function(){
      browser.assert.elements('#nickname', 0);
      browser.assert.element('#nickname-row span.label.label-default');
      browser.assert.text('#nickname-row span.label.label-default', 'Hola! jasmine');
    });
  });

  describe('and adding a new daily', function(){

    beforeEach(function(done){
      browser
        .fill('#daily-name', 'RTBI Daily Standup')
        .pressButton('#daily-add-button', done);
    });

    it('should display the added daily\'s info as a link', function(){
      browser.assert.elements('a.daily-join', 1);
      browser.assert.text('a.daily-join', 'RTBI Daily Standup');
    });

    describe('then removing it', function() {
      beforeEach(function(done){
        browser.pressButton('.daily-delete[name="RTBI Daily Standup"]', done);
      });

      it('should remove the daily\'s info and delete button', function(){
        browser.assert.elements('.daily-info', 0);
        browser.assert.elements('.daily-delete', 0);
      });
    });

    describe('and then clicking it', function() {
      beforeEach(function(done) {
        browser.clickLink(browser.text('.daily-join'), done);
      });

      it('should open up its dailies page', function() {
        console.log('checking for dalies page!');
        browser.assert.url('/dailies/RTBI Daily Standup');
      });
    });

  });

});
