const express = require("express");
const app = express();

const routes = require("./routes/route");

const bodyParser = require("body-parser");
const cors = require('cors');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", routes);

module.exports = app;
