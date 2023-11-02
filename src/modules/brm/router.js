const router = require("express").Router();
const controller = require("./controller.js");
router.get("/brm/:brmId", controller.GET);
router.get("/brm/info/all", controller.GET_ALL_INFO);
router.post("/brm/add", controller.POST);
router.put("/brm/edit/:brmId", controller.PUT);
router.post("/brm/info/add", controller.POST_INFO);
router.put("/brm/info/edit/:infoId", controller.PUT_INFO);

router.post("/brm/create/data", controller.fileUpload, controller.brm_create);
router.get("/brm/data/all", controller.brm_get_all);
router.delete("/brm/data/:brmId", controller.brm_delete);
router.get("/brm/data/:brmId", controller.brm_get_one);

module.exports = router;
