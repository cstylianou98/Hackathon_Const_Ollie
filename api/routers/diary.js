const { Router } = require('express');
const diaryController = require('../controllers/diary');

const diaryRouter = Router();

diaryRouter.get("/", diaryController.index);
entryRouter.get("/top", diaryController.getTop);
diaryRouter.get("/:entry_id", diaryController.show);
diaryRouter.post("/", diaryController.create);
diaryRouter.patch("/:entry_id/:vote_val", diaryController.update)
diaryRouter.delete("/:entry_id", diaryController.destroy);

module.exports = diaryRouter;