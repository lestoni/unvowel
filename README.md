# unvowel

[![NPM](https://nodei.co/npm/unvowel.png?downloads=true&stars=true)](https://nodei.co/npm/unvowel/)

[![build status](https://travis-ci.org/lestoni/unvowel.png)](http://travis-ci.org/lestoni/unvowel)

Works by removing vowels from a string.

Good for generating rememberable passwords.


## example

```javascript
  // on the command line
  $ unvowel -s 'good yuki' -j
  $ gdyk
  $ unvowel -s 'good yuki'
  $ gd yk
```

```javascript
  // programmatically

  var unvowel = require('unvowel');

  console.log(unvowel.parse('good yuki')); // gd yk
  console.log(unvowel.parse('good yuki', true)); // gdyk
```

## API.

### unvowel.parse(str#string, join#bool)

Return a `string` _str_ with all the vowels removed.

_join_ controls the option to either join the final output or not. By default
its value is `false`.

## install

```javascript
  $ npm install unvowel
  // globally
  $ npm install -g unvowel
```

## license

MIT.
