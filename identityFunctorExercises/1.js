const Box = x =>
    ({
        map: f => Box(f(x)),
        fold: f => f(x),
        toString: () => `Box(${x})`
    })

// Exercise: Box
// Goal: Refactor each example using Box
// Keep these tests passing!
// Bonus points: no curly braces


// Ex1: Using Box, refactor moneyToFloat to be unnested.
// =========================
const moneyToFloat = str =>
    parseFloat(str.replace(/\$/, ''))


const moneyToFloatRefactored = x =>
    Box(x).fold(string => parseFloat(string.replace(/\$/, '')))

console.log('test ------ ', moneyToFloatRefactored('$5.00'))