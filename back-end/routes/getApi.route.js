const express = require('express');
const router = express.Router();

const getApiCtrl = require("../controllers/getApi")

router.get("/", getApiCtrl.getToken );
router.post("/",  getApiCtrl.getProfil);
router.post("/scores", getApiCtrl.getBestScores)

module.exports = router;