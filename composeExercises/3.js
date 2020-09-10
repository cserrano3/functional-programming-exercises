const R = require('ramda');
const _ = R;


// Exercise 3:
// ============
// Use the helper function _average to refactor averageDollarValue as a composition

const CARS = [
    { name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true },
    { name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false },
    { name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false },
    { name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false },
    { name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true },
    { name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false }
];


const _average = function (xs) {
    return _.reduce(_.add, 0, xs) / xs.length;
};

const averageDollarValue_ = function (cars) {
    const dollar_values = _.map(_.prop('dollar_value'), cars);
    return _average(dollar_values);
};

var averageDollarValue = function (cars) {
    var dollar_values = _.map(function (c) { return c.dollar_value; }, cars);
    return _average(dollar_values);
};

const getDollarValues = cars => _.map(_.prop('dollar_value'), cars);

const calculateAverage = dollarValues => _average(dollarValues);

const refactored = _.compose(calculateAverage, getDollarValues)

console.log(refactored(CARS))