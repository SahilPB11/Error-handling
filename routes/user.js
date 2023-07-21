const express = require("express");
const { userFun } = require("../controler/userControler");

const router = express.Router();

router.get("/", userFun)

module.exports = router;