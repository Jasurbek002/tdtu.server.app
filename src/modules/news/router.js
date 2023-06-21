const router = require('express').Router()
const controller = require('./controller.js')


router.get('/news',controller.GET)
router.get('/news/:newsId',controller.GET_ONE)
router.post('/news/add',controller.uploadFile,controller.POST)
router.put('/news/edit/:newsId',controller.uploadFile,controller.PUT)
router.delete('/news/delete/:newsId',controller.DELETE)

module.exports = router