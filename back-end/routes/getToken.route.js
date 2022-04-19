const express = require('express');
const router = express.Router();

const getTokenCtrl = require("../controllers/getToken")

router.get("/", getTokenCtrl.getToken );

module.exports = router;