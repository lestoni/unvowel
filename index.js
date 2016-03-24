exports.parse = function parse(string, join){
  if(typeof string !== 'string'){
    throw new TypeError('Expected a string as the first option');
  }

  return string.replace(join ? /[aeiou\s]/gi : /[aeiou]/gi);
};
