const { response } = require("../utils")
const Planet = require("../data")

module.exports = async (req, res) => {
    const planet = req.body
    const newPlanet = await Planet.create(planet)
    response(res, 201, newPlanet)
}