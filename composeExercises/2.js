const R = require('ramda');
const _ = R;


// Exercise 2:
// ============
// use _.compose(), _.prop() and _.head() to retrieve the name of the first car

const CARS = [
    { name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true },
    { name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false },
    { name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false },
    { name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false },
    { name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true },
    { name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false }
];

const getName = car => _.prop('name', car);

const getFirstCar = cars => _.head(cars);

const getNameOfFirstCar = _.compose(getName, getFirstCar)

console.log(getNameOfFirstCar(CARS))