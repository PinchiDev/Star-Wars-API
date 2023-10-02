const { response } = require("../utils")
const Planet = require("../data")

module.exports = async (req, res) => {
    const {id} = req.body
    const updated = await Planet.update(id)
    response(res, 201, updated)
}