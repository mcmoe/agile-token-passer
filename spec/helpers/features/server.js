/* Before all tests, launch the app back end and call back jasmine */
beforeAll(function(done) {
  require('../../../bin/www');
  done()
});
