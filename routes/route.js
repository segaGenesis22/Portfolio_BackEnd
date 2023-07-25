const express = require("express");
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        res.json({message: "Server Response."})
    } catch (error) {
        res.status(500).json({message: err.message})
    }
    next()
});

module.exports = router;

