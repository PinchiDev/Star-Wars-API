const schemaStore = require("../database")

module.exports = async (req, res) => {
    const {model, id} = req.params
    const response = await schemaStore[model].get(id)
    res.status(200).json(response)
}