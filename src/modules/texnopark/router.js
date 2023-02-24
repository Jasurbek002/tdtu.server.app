const router = require('express').Router()
const controller = require('./controller.js')

router.get('/inno',controller.GET)
router.post('/inno/post/title',controller.POST)
router.post('/inno/post/photo',controller.upladPhotos,controller.POSTIMAGE)
router.delete('/inno/delete/:innoId',controller.DELETE)
module.exports = router