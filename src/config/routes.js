const express = require("express");
const productController = require("../controller/product-controller");

const route = new express.Router();

route.get("/api/product", productController.getProducts);
route.post("/api/product", productController.insertProducts);

module.exports = route;
