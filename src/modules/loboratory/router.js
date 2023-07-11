const router = require('express').Router()
const controller = require('./controller.js')

router.get('/loboratory/rooms',controller.GET_ROOMS)
router.get('/loboratory/:roomId',controller.GET)
router.post('/loboratory/add',controller.uploadFile,controller.POST)
router.put('/loboratory/edit/:id',controller.uploadFile,controller.PUT)

module.exports = router