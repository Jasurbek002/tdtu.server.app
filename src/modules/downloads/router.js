const router = require('express').Router()
const  controller = require('./controller.js')

router.get('/download/techkengash',controller.TECHNIZOM);
router.get('/download/technizom',controller.TECHKENGASH);
router.get('/download/atoqli',controller.ATOQLI);
router.get('/download/prezdent',controller.PREZDENT);
router.get('/download/gidro',controller.GIDRO);
router.get('/download/magister',controller.MAGISTER);
router.get('/download/rektor',controller.REKTOR);



module.exports = router