module.exports = (fn) => (req, res, next) => {
    return fn(req, res).catch((error) => next(error))
}