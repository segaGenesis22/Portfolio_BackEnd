const express = require("express");
const router = express.Router();

require("dotenv").config();
const db = require("../service/dbConnection.js");

router.get("/", async (req, res) => {
    try {
        res.json({message: "Server Response."})
    } catch (error) {
        res.status(500).json({message: err.message})
    }
});

module.exports = router;

