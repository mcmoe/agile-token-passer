const Zombie = require('zombie');

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
      browser.assert.element('#nickname-row label.label-info');
      browser.assert.text('#nickname-row label.label-info', 'Hola! jasmine');
    });
});

});
