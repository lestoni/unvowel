var VOWELS   = /[aeiou]/gi;
var VOWELS_AND_SPACE = /[aeiou\s]/g;

exports.parse = function parse(string, join){
  if(typeof string !== 'string'){
    throw new TypeError('Expected a string as the first option');
  }

  return string.replace(join ? VOWELS_AND_SPACE : VOWELS, '');
};
