const { Router } = require("express")
const controllers = require("../controllers")
const middlewares = require("../middlewares")

const router = Router()

router.get("/", controllers.getFilm)
router.get("/:id", controllers.getFilmById)
router.delete("/:id", controllers.deleteFilm)
router.post("/", middlewares.filmValidation, controllers.createFilm)
router.patch("/", controllers.updateFilm)

module.exports = router