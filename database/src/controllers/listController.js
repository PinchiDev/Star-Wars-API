const schemaStore = require("../database")

module.exports = async (req, res) => {
    const {model} = req.params
    const response = await schemaStore[model].list()
    res.status(200).json(response)
}