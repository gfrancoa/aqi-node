const express = require("express"),
  router = express.Router(),
  stationCtrl = require("../controllers/station.controller");

router.get("/:city", stationCtrl.list);

module.exports = router;
