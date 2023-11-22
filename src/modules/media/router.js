const router = require("express").Router();
const controller = require("./controller.js");

router.post("/media/add", controller.fileUpload, controller.media_create);

module.exports = router;
