// Bonus 2:
// ============
// Refactor to pointfree.

const fastestCar = function (cars) {
    const sorted = _.sortBy(car => car.horsepower, cars);
    const fastest = _.last(sorted);
    return fastest.name + ' is the fastest';
}

QUnit.test("Bonus 2: fastestCar", assert => {
    assert.equal(fastestCar(CARS), 'Aston Martin One-77 is the fastest');
})