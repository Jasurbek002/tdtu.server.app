const express = require('express');
const router = express.Router();
const controller = require('./controller.js');

router.get('/banners', controller.GET);
router.get('/banner/:bunnerId', controller.getOneData);
router.post('/banners/post', controller.fileUpload, controller.POST);
router.put('/banners/put/:bannerId', controller.fileUpload, controller.PUT);
router.delete('/banners/remove/:bannerId', controller.DELETE);
module.exports = router;
