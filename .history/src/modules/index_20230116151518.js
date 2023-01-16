const adminRouter = require('./admin/router.js')
const bannerRouter = require('./carusel/router.js')
const newsRouter = require('./news/router.js')
const partnerRouter = require('./partners/router.js')
const spinRouter = require('./spin/router.js')
module.exports = [
    adminRouter,
    bannerRouter,
    newsRouter,
    partnerRouter,
    spinRouter
];