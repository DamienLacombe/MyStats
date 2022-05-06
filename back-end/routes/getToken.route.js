const express = require('express');
const router = express.Router();

const getTokenCtrl = require("../controllers/getToken")

router.get("/", getTokenCtrl.getToken );
router.post("/",  getTokenCtrl.getProfil)

module.exports = router;