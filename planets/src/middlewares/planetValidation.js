const { ClientError } = require("../utils/errors")

module.exports = (req, res, next) => {
    const { name } = req.body
    if (name == String) return next()
    else throw new ClientError("Error en el nombre del planeta", 401)
}