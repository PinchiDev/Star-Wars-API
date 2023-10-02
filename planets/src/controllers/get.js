const { response } = require("../utils")
const Planet = require("../data")

module.exports = async (req, res) => {
    const planet = await Planet.list()
    response(res, 201, planet)
}