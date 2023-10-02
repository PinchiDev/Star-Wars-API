const { Router } = require("express")
const controllers = require("../controllers")
const middlewares = require("../middlewares")

const router = Router()

router.get("/", controllers.getCharacters)
router.get("/:id", controllers.getCharacterById)
router.delete("/:id", controllers.deleteCharacter)
router.post("/", middlewares.characterValidation, controllers.createCharacter)
router.patch("/", controllers.updateCharacter)

module.exports = router