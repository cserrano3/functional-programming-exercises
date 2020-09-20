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

// Ex2: Refactor parseDbUrl to return an Either instead of try/catch
// =========================

const config = '{"url": "postgres://sally:muppets@localhost:5432/mydb"}'

const parseDbUrl = cfg => {
    try {
        const c = JSON.parse(cfg) // throws if it can't parse
        return c.url.match(DB_REGEX)
    } catch (e) {
        return null
    }
}

const parseURL = config => fromNullable(JSON.parse(config))
    .fold(() => 'unable to parse',
        (url) => url);


const parseDBUrlRefactored = config =>
    fromNullable(config)
        .map(url => parseURL(url))
        .map(urlObj => urlObj.url.match(DB_REGEX))
        .fold((error) => logIt(`Error on parsing the url ${error}`),
            (urlObj) => logIt(`success: ${urlObj}`))

parseDBUrlRefactored(config)