const { ClientError } = require("../utils/errors")

module.exports = (req, res, next) => {
    const { model, id } = req.params
    if (["Character", "Film", "Planet"].includes(model) & id == Number) return next()
    else throw new ClientError("modelo o id invalido / error en el endpoint", 401)
}