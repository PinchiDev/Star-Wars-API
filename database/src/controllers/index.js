const catchedAsync = require("../utils/catchedAsync")


module.exports = {
    listController: catchedAsync(require("./listController")),
    getController: catchedAsync(require("./getController")),
    postController: catchedAsync(require("./postController")),
    deleteController: catchedAsync(require("./deleteController")),
    patchController: catchedAsync(require("./patchController"))
}