const router = require("express").Router();
const controller = require("./controller.js");

router.post("/media/add", controller.fileUpload, controller.media_create);
router.get("/media/get/all", controller.getAllMedia);
router.delete('/media/remove/:mediaId',controller.deleteMedia)
module.exports = router;
