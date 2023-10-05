const { Router } = require('express');
const snackController = require('../controllers/snack');

const snackRouter = Router();

snackRouter.get("/", snackController.index);
snackRouter.get("/top", snackController.getTop);
snackRouter.get("/:snack_id", snackController.show);
snackRouter.post("/", snackController.create);
snackRouter.patch("/:snack_id/:vote_val", snackController.update)
snackRouter.delete("/:snack_id", snackController.destroy);

module.exports = snackRouter;