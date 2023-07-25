const express = require("express");
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        res.json({message: "Server Response."})
        console.log("Here is the server response")
    } catch (error) {
        res.status(500).json({message: err.message})
    }
    next()
});

module.exports = router;

