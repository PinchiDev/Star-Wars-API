const { response } = require("../utils")
const Character = require("../data")

module.exports = async (req, res) => {
    const character = req.body
    const newCharacter = await Character.create(character)
    response(res, 201, newCharacter)
}