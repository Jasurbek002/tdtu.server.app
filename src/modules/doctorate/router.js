const router = require('express').Router()
const controller = require('./controller.js')
router.get('/doctorate',controller.GET)
router.post('/doctorate/add',controller.POST)
router.put('/doctorate/edit/:docId',controller.PUT)
router.delete('/doctorate/delete/:docId',controller.DELETE)
module.exports = router