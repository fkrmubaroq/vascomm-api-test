const express = require("express");
const routes = require("../config/routes.js");
const { errorMiddleware } = require("../middleware/error-middleware.js");
const bodyParser = require("body-parser");

const web = express();

web.use(bodyParser.urlencoded({ extended: true }));
web.use(routes);
web.use(errorMiddleware);

module.exports = web;