const adminRouter = require("./admin/router.js");
const bannerRouter = require("./carusel/router.js");
const newsRouter = require("./news/router.js");
const loyhaRouter = require("./loyha/router.js");
const downloadRouter = require("./downloads/router.js");
const doctorateRouter = require("./doctorate/router.js");
const loboratoryRouter = require("./loboratory/router.js");
const economyRouter = require("./economy/router.js");
// const partnerRouter = require('./partners/router.js')
// const spinRouter = require('./spin/router.js')

module.exports = [
  adminRouter,
  bannerRouter,
  newsRouter,
  loyhaRouter,
  downloadRouter,
  doctorateRouter,
  loboratoryRouter,
  economyRouter,
  // partnerRouter,
  // spinRouter,
];
