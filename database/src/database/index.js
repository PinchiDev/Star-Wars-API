const mongoose = require("mongoose")
const { MONGO_URL } = require("../configs/envs")

const dbConnection = mongoose.createConnection(MONGO_URL)



module.exports = {
    Character:dbConnection.model("Character", require("./schemas/characterSchema")),
    Film:dbConnection.model("Film", require("./schemas/filmSchema")),
    Planet:dbConnection.model("Planet", require("./schemas/planetSchema"))
}