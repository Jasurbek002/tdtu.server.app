const router = require('express').Router()
const controller = require('./controller.js')

router.get('/loyha',controller.GET)
router.post('/loyha/add',controller.POST)
router.put('/loyha/edit/:loyhaId',controller.PUT)
router.delete('/loyha/delete/:loyhaId',controller.DELETE)

module.exports = router