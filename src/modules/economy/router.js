const router = require('express').Router()
const controller = require('./controller.js')

router.get('/economy',controller.GET)
router.post('/economy/add', controller.POST)
router.put('/economy/edit/:ecoId',controller.PUT)
router.delete('/economy/delete/:ecoId',controller.DELETE)

module.exports = router