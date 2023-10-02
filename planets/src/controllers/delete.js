const { response } = require("../utils")
const Planet = require("../data")

module.exports = async (req, res) => {
    const {id} = req.params
    const deletedPlanet = await Planet.delete(id)
    response(res, 201, deletedPlanet)
}