const { Router } = require("express"),
  router = Router();

router.use("/stations", require("../routes/station.route"));

module.exports = router;
