const express = require("express");
const router = express.Router();

require("dotenv").config();
const db = require("../service/dbConnection.js");

router.get("/", (req, res) => {
    response.json({message: "Server Response."})
});

module.exports = router;

