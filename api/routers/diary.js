const { Router } = require('express');
const diaryController = require('../controllers/diary');

const diaryRouter = Router();

diaryRouter.get("/", diaryController.index);
diaryRouter.get("/:entry_id", diaryController.show);
diaryRouter.get("/category/:category", diaryController.showByCategory);
diaryRouter.get("/date/:date", diaryController.showByDate);
//could add search for string in text
diaryRouter.post("/", diaryController.create);
diaryRouter.patch("/:entry_id", diaryController.update)
diaryRouter.delete("/:entry_id", diaryController.destroy);

module.exports = diaryRouter;