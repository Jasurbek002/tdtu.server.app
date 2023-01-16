const router = require('express').Router()
const controller = require('./controller.js')
    
router.get('/spin',controller.GET)
router.post('/spin/add',controller.POST)
router.put('/spin/edit/:spinId',controller.PUT)
router.delete('/spin/delete/:spinId',controller.DELETE)

module.exports = router