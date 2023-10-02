const { catchedAsync } = require("../utils")

module.exports = {
    getCharacters: catchedAsync(require("./get")),
    createCharacter: catchedAsync(require("./create")),
    getCharacterById: catchedAsync(require("./getById")),
    deleteCharacter: catchedAsync(require("./delete")),
    updateCharacter: catchedAsync(require("./update")),
}