const R = require('ramda');

const split = (delimiter, string) => string.split(delimiter)

const curriedSplit = R.curry(split)

const result = curriedSplit(' ')('Jingle bells Batman smells')

console.log('result -------- ', result)