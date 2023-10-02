const { catchedAsync } = require("../utils")

module.exports = {
    getPlanets: catchedAsync(require("./get")),
    createPlanet: catchedAsync(require("./create")),
    getPlanetById: catchedAsync(require("./getById")),
    deletePlanet: catchedAsync(require("./delete")),
    updatePlanet: catchedAsync(require("./update")),
}