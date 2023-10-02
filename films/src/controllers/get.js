const { response } = require("../utils")
const Film = require("../data")

module.exports = async (req, res) => {
    const film = await Film.list()
    response(res, 201, film)
}