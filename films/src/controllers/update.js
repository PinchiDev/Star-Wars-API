const { response } = require("../utils")
const Film = require("../data")

module.exports = async (req, res) => {
    const {id} = req.body
    const updated = await Film.update(id)
    response(res, 201, updated)
}