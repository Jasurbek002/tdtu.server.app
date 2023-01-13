const router = require('express').Router()
const controller = require('./controller.js')


router.get('/new',controller.GET)
router.post('/news/add',controller.uploadFile,controller.POST)
router.put('/news/edit/:newsId',controller.uploadFile,controller.PUT)
router.delete('/news/delete/:newsId',controller.DELETE)

module.exports = router