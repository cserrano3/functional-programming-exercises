const R = require('ramda');

//Refactor filterQs

const filterQs = function (array) {
    return R.filter(function (element) { return _.test(/q/ig, element); }, array);
}

const filterable = string => R.test(/q/ig, string)

const refactored = array => R.filter(filterable, array)

console.log(refactored(['quick', 'camels', 'quarry', 'over', 'quails']))