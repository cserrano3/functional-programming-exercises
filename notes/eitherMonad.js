// two subclasses of a superclass called Either

const Right = x =>
    ({
        map: f => Right(f(x)), // apply the function
        fold: (f, g) => g(x),
        inspect: () => `Right(${x})`
    })

const Left = x =>
    ({
        map: f => Left(x), // it does not apply any function, so it can be used to error handling
        fold: (f, g) => f(x),
        inspect: () => `Left(${x})`
    })

const findColor = name =>
    ({
        red: '#ff4444',
        blue: '#3b5998',
        yellow: '#fff68f'
    }[name]);

// const result = findColor('redd').toUpperCase() // undefined

const findColorRefactored = name => {
    const found = {
        red: '#ff4444',
        blue: '#3b5998',
        yellow: '#fff68f'
    }[name]

    return found ? Right(found) : Left('dunno')
}

/*
    Eventually, the findColor function will receive
    an invalid color name, therefore, instead
    of blowing up, it will handle the error
    through the Left
*/

const res = color => findColorRefactored(color)
    .map(x => x.toUpperCase())
    .fold(
        () => `color not found`,
        (x) => `found it ----- ${x}`
    )

console.log('res ------------- ', res('aaaa'))