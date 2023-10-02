const { Router } = require("express")
const { modelValidation, modelIdValidation } = require("../middlewares")
const { listController, getController, postController, deleteController, patchController } = require("../controllers")

const router = Router()

router.get("/:model", modelValidation ,listController)
router.get("/:model/:id", modelIdValidation , getController )
router.post("/:model", modelValidation , postController)
router.patch("/:model/:id", modelIdValidation , patchController)
router.delete("/:model/:id", modelIdValidation , deleteController)

module.exports = router