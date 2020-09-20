// Definitions
// ====================
const Right = x =>
    ({
        chain: f => f(x),
        map: f => Right(f(x)),
        fold: (f, g) => g(x),
        toString: () => `Right(${x})`
    })

const Left = x =>
    ({
        chain: f => Left(x),
        map: f => Left(x),
        fold: (f, g) => f(x),
        toString: () => `Left(${x})`
    })

const fromNullable = x =>
    x != null ? Right(x) : Left(null)

const tryCatch = f => {
    try {
        return Right(f())
    } catch (e) {
        return Left(e)
    }
}

const logIt = x => {
    console.log(x)
    return x
}

const DB_REGEX = /postgres:\/\/([^:]+):([^@]+)@.*?\/(.+)$/i

// Exercise: Either
// Goal: Refactor each example using Either
// Bonus: no curlies
// =========================

const user = {
    address: {
        street: {
            name: "Willow"
        }
    }
}

// Ex1: Refactor streetName to use Either instead of nested if's
// =========================
const street = user => {
    const address = user.address

    if (address) {
        return address.street
    } else {
        return 'no street'
    }
}

const getStreet = user =>
    fromNullable(user)
        .map(user => fromNullable(user.address).chain(x => x))
        .map(address => fromNullable(address.street).chain(x => x))
        .fold(() => 'not found', street => logIt(street))

getStreet(user)