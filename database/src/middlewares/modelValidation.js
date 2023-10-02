const { ClientError } = require("../utils/errors")

module.exports = (req, res, next) => {
    
    const { model } = req.params
//    console.log("aqui es que rompe", model)
    if (["Character", "Film", "Planet"].includes(model))
    return next()
    else throw new ClientError("modelo invalido / error en el endpoint", 401)
}