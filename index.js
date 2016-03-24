var VOWELS   = /[aeiou]/gi;
var VOWELS_AND_SPACE = /[aeiou\s]/g;

exports.parse = function parse(string, join){
  if(typeof string !== 'string'){
    throw new TypeError('Expected a string as the first option');
  }

  join = join || false;
  var replacer = VOWELS;
  if (join) {
      replacer = VOWELS_AND_SPACE;
  }

  return string.replace(replacer, '');
};
