const fs = require("fs");
const Axios = require("axios");
const path = require("path");

async function downloadImage() {
  
  const Resdata = fetch("https://api.devnugget.uz/v1/brm/data/all")
    .then((res) => res.json())
    .then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        console.log(i, res?.data[i]?.brm_image)
        const fullUrl = `https://api.devnugget.uz/${res?.data[i]?.brm_image}`
        const file = res?.data[i]?.brm_image
         imgdvd(fullUrl,file)
      }
    });
}

async function imgdvd(url, aspath) {
  const filName = path.resolve(__dirname, "..", "..", "uploads", aspath);
  const response = await Axios({
    url,
    method: "GET",
    responseType: "stream",
  });
  return new Promise((resolve, reject) => {
    response.data
      .pipe(fs.createWriteStream(filName))
      .on("error", reject)
      .once("close", () => resolve(filName));
  });
}

module.exports = {
  downloadImage,
};
