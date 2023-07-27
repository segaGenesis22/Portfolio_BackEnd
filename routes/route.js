const express = require('express');
const router = express.Router();
const db = require("../service/dbConnection");


router.post('/', async (req, res) => {
    const data = {
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        employer: req.body.employer
    }
    db.client.connect((err, client) => {
        const insertQuery = "INSERT INTO Person (name, email, number, employer) VALUES($1, $2, $3, $4)";
        const values = [data.name, data.email, data.number, data.employer];

        client
            .query(insertQuery, values)
            .then((result) => {
                console.log(result);

                res.status(200).send({
                    status: "success",
                    data: {
                      name: "data Uploaded Successfully",
                      email: result.email,
                      number: result.number,
                      employer: result.employer,
                    },
                });
            })
            .catch((err) => {
                res.status(500).send({
                    message: "failure", err
                });
            })
    });
    // try {
    //     res.status(200).send("Server Response.")
    // } catch (error) {
    //     res.status(500).json({message: err.message})
    // }
});

module.exports = router;

