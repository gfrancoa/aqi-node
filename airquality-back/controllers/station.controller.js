const config = require("../config/config");
const ctrlAqi = {};
const https = require("https");

ctrlAqi.list = async (req, res) => {
  return new Promise((resolve, reject) => {
    try {
      https.get(
        `${config.apiHost}/search/?keyword=${req.params.city}&token=${config.apiKey}`,
        (resp) => {
          resp.on("data", (chunk) => {
            let data = JSON.parse(chunk).data;
            resolve(data);
          });
        }
      );
    } catch {
      reject("Ocurrio un error al obtener la api");
    }
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => err);
};

module.exports = ctrlAqi;
