var VOWELS   = /[aeiou]+/gi;
var WHITE_SPACE = /\s+/g;
var NOTHING  = '';

function tokenize(str){
  return str.split(WHITE_SPACE);
}

function replace(tokens){
  return tokens.map(function(t){
    return t.replace(VOWELS,NOTHING);
  });
}

exports.parse = function parse(string, join){
  if(typeof string !== 'string'){
    throw new TypeError('Expected a string as the first option');
  }

  join = join || false;

  var tokens = tokenize(string);
  var unvoweled = replace(tokens);

  return join ? unvoweled.join('') : unvoweled.join(' ');
};
