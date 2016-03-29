// jshint mocha:true

var unvowel = require('./');
var assert  = require('assert');

var hasWhitespace = function (str) {
  return /\s/.test(str);
}

describe('unvowel#parse', function() {
  it('should remove vowels from a string', function(){
    var str = 'aeiou';
    var unvoweled = unvowel.parse(str).split(/\s+/g);

    assert.equal(unvowel.parse(str), '');
  });

  it('should not join strings after unvoweling by default', function() {
    var str = 'goofy yuki';
    var unvoweled = unvowel.parse(str);

    assert(hasWhitespace(unvoweled));
  });

  it('should join strings after unvoweling with join option set to true', function() {
    var str = 'goofy yuki';
    var unvoweled = unvowel.parse(str, true);

    assert(!hasWhitespace(unvoweled));
  });

  it('should not join strings after unvoweling with join option set to false', function() {
    var str = 'goofy yuki';
    var unvoweled = unvowel.parse(str, false);

    assert(hasWhitespace(unvoweled));
  });
});
