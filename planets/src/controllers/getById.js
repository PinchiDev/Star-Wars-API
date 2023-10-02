const { response } = require("../utils")
const Planet = require("../data")

module.exports = async (req, res) => {
    const {id} = req.params
    const planet = await Planet.getById(id)
    response(res, 201, planet)
}