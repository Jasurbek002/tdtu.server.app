const express = require('express')
const router = express.Router()
const controller = require('./controller.js')

router.get('/banners',controller.GET)
router.post('/banner/post',controller.fileUpload,controller.POST)
router.put('/banner/put/:bannerId',controller.fileUpload,controller.PUT)
router.delete('/banner/remove/:bannerId',controller.DELETE)
module.exports = router