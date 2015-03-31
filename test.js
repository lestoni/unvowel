// jshint mocha:true
var unvowel = require('./');
var assert  = require('assert');

var WHITE_SPACE = /\s+/g;
var VOWELS      = /[aeiou]+/gi;

describe('unvowel#parse', function() {
  it('should remove vowels from a string', function(){
    var str = 'aeiou';
    var unvoweled = unvowel.parse(str).split(/\s+/g);

    assert.equal(unvoweled.indexOf(VOWELS), -1);
  });

  it('should not join strings after unvoweling by default', function() {
    var str = 'goofy yuki';
    var unvoweled = unvowel.parse(str);

    assert.notEqual(unvoweled.search(WHITE_SPACE), -1);
  });

  it('should join strings after unvoweling with join option set to true', function() {
    var str = 'goofy yuki';
    var unvoweled = unvowel.parse(str, true);

    assert.equal(unvoweled.search(WHITE_SPACE), -1);
  });

  it('should not join strings after unvoweling with join option set to false', function() {
    var str = 'goofy yuki';
    var unvoweled = unvowel.parse(str, false);

    assert.notEqual(unvoweled.search(WHITE_SPACE), -1);
  });

});
