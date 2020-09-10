// Bonus 1:
// ============
// Refactor availablePrices with compose.

const availablePrices = function (cars) {
    const available_cars = _.filter(_.prop('in_stock'), cars);
    return available_cars.map(x => formatMoney(x.dollar_value)).join(', ');
}

QUnit.test("Bonus 1: availablePrices", assert => {
    assert.deepEqual(availablePrices(CARS), '$700,000.00, $1,850,000.00');
})
