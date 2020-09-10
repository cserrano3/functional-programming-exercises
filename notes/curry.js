
//curried functions remember the first parameter passed to them
const add = (x, y) => x + y

const curry = f => x => y => f(x, y)

const curriedAdd = curry(add)

const increment = curriedAdd(1);

const result = increment(5)

const filterArray = (f, array) => array.filter(f)

const filter = curry(filterArray)

console.log(filter(x => x % 2)([1, 2, 3, 4, 5, 6]))

// When defining argument order in curry, the data that is worked
// on must be the last argument, because curry needs to remember
// the operations that need to be executed
