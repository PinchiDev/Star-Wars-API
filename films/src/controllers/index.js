const { catchedAsync } = require("../utils")

module.exports = {
    getFilm: catchedAsync(require("./get")),
    createFilm: catchedAsync(require("./create")),
    getFilmById: catchedAsync(require("./getById")),
    deleteFilm: catchedAsync(require("./delete")),
    updateFilm: catchedAsync(require("./update")),
}