const { response } = require("../utils")
const Character = require("../data")

module.exports = async (req, res) => {
    const {id} = req.body
    const updated = await Character.update(id)
    response(res, 201, updated)
}