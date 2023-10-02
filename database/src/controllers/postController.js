const schemaStore = require("../database")

module.exports = async (req, res) => {
    const { character } = req.body
    const { model } = req.params
    const response = await schemaStore[model].createNew(character)
    res.status(200).json(response)
}