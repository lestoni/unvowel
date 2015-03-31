var unvowel = require('./');

var joined = unvowel.parse('good jonathan', true);
var unjoined = unvowel.parse('good jonathan');

var sentence = unvowel.parse('This is actually a sentence');

console.log(joined);
console.log(unjoined);
console.log(sentence);
