const Box = x => ({
    map: f => Box(f(x)),
    inspect: `Box(${x})`,
    fold: f => f(x)
})

const halfTheFirstLargeNumber = xs => {

    const found = xs.filter(x => x >= 20)
    const answer = first(found) / 2

    return `The answer is ${answer}`
}

const composeInTermsOfBox = (f, g) => x => Box(x).map(g).fold(f)

const halfTheFirstLargeNumber = xs => {
    Box(xs)
        .map(x => xs.filter(x => x >= 20))
        .map(found => first(found) / 2)
        .fold(answer => `The answer is ${answer}`)
}

