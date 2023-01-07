const express = require('express')
const router = express.Router()
const validation = require('./../../middlewares/validation.js')
const controller = require('./controller.js')
router.post('/login',validation,controller.LOGIN)
router.post('/register',validation,controller.REGISTER)
router.put('/edit/:userId',validation,controller.PUT)

module.exports = router