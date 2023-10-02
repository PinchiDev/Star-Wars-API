const { ClientError } = require("../utils/errors")

module.exports = (req, res, next) => {
    const { title } = req.body
    if (title == String) return next()
    else throw new ClientError("Error en el nombre de la pelicula", 401)
}