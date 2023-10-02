const { response } = require("../utils")
const Character = require("../data")

module.exports = async (req, res) => {
    const {id} = req.params
    const deletedCharacter = await Character.delete(id)
    response(res, 201, deletedCharacter)
}