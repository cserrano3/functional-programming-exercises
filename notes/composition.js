const R = require('ramda')

const toUpper = str => str.toUpperCase()
const exclaim = str => str + '!'

// manual compose
const compose = (f, g) => x => f(g(x))

const shout = compose(toUpper, exclaim);

const screamMore = str => str + '!!!!!!!!!!!'

console.log(shout('hello'));

const logResult = arg => {
    console.log('here is the result');
    return arg
}

const curriedLog = R.curry((tag, x) => (console.log(tag, x), x))

/*Ramda compose function is variadic, meaning it can take N functions
and it will return th expected result */
const screaming = R.compose(toUpper, shout, screamMore, curriedLog('start'))

console.log(screaming('o dear god'))

/* Point free style */