const express = require("express");

const router = express.Router();
const { makePayment } = require("../controllers/chekout.controller");

router.post("/create-checkout-session/:userId", makePayment);

module.exports = router;
