const R = require('ramda');

const _keepHighest = (x, y) => x >= y ? x : y // <- leave be

// TODO: rewrite max in its "simplest" form
const max = function (xs) {
    return _.reduce(function (acc, x) {
        return _keepHighest(acc, x);
    }, 0, xs);
}

const refactored = array => R.reduce(_keepHighest, 0, array)

console.log(refactored([323, 523, 554, 123, 5234]))