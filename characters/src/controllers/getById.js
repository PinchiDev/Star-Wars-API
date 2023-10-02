const { response } = require("../utils")
const Character = require("../data")

module.exports = async (req, res) => {
    const {id} = req.params
    const characters = await Character.getById(id)
    response(res, 201, characters)
}