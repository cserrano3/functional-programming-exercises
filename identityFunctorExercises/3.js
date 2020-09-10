
// Ex3: Using Box, refactor applyDiscount (hint: each variable introduces a new Box)
// =========================
const Box = x =>
    ({
        map: f => Box(f(x)),
        fold: f => f(x),
        toString: () => `Box(${x})`
    })


const percentToFloat = str =>
    Box(str)
        .map(string => string.replace(/\%/, ''))
        .map(parsed => parseFloat(parsed))
        .fold(floatNum => floatNum * 0.0100)

const moneyToFloat = x =>
    Box(x).fold(string => parseFloat(string.replace(/\$/, '')))


// It' necessary a monad
const applyDiscount = (price, discount) => {
    return Box(moneyToFloat(price))
        .fold(cents =>
            Box(percentToFloat(discount))
                .fold(savings => cents - (cents * savings))
        )
}

console.log('final price -------------- ', applyDiscount('$10.00', '20%'))