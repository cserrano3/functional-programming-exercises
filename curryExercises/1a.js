const R = require('ramda');

const split = string => string.split(' ');

const curriedSplit = R.curry(split);

const map = array => R.map(curriedSplit, array)

const curriedMap = map(["Jingle bells Batman smells", "Robin laid an egg"]);

console.log(curriedMap)