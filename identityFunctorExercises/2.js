const Box = x =>
    ({
        map: f => Box(f(x)),
        fold: f => f(x),
        toString: () => `Box(${x})`
    })


// Ex2: Using Box, refactor percentToFloat to remove assignment
// =========================
const percentToFloat = str => {
    const float = parseFloat(str.replace(/\%/, ''))
    return float * 0.0100
}



const percentToFloatRefactored = str =>
    Box(str)
        .map(string => string.replace(/\%/, ''))
        .map(parsed => parseFloat(parsed))
        .fold(floatNum => floatNum * 0.0100)

console.log('aaaaaa ------ ', percentToFloatRefactored('20%'))

