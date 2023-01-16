const router = require('express').Router()
const controller = require('./controller.js')


router.get('/partners',controller.GET)
router.post('/partners/add',controller.fileUpload,controller.POST)
router.put('/partners/edit/:partId',controller.fileUpload,controller.PUT)
router.delete('/partners/delete/:partId',controller.DELETE)
module.exports = router