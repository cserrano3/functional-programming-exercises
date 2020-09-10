// we need to make the function nextCharForNumberString dotChainable

const nextCharForNumberString = str => {
    const trimmed = str.trim()
    const number = parseInt(trimmed)
    const nextNumber = new Number(number + 1)

    return String.fromCharCode(nextNumber)
}

const result = nextCharForNumberString('64')

const Box = x => ({
    map: f => Box(f(x)),
    inspect: `Box(${x})`,
    fold: f => f(x)
})

const result2 = () => Box('a')
    .map(x => x.toUpperCase())
    .map(x => String.fromCharCode(x))


// Identity functors have controlled and isolated data flows
const nextCharForNumberString2 = str => {
    return Box(str)
        .map(x => x.trim())
        .map(trimmed => parseInt(trimmed))
        .map(number => number + 1)
        .fold(String.fromCharCode)
}

console.log(nextCharForNumberString2('64  '))