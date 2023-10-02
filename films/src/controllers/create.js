const { response } = require("../utils")
const Film = require("../data")

module.exports = async (req, res) => {
    const film = req.body
    const newFilm = await Film.create(film)
    response(res, 201, newFilm)
}