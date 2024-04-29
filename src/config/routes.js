const express = require("express");
const productController = require("../controller/product-controller");
const userController = require("../controller/user-controller");
const { uploadImage } = require("./storage");
const route = new express.Router();


route.get("/api/product", productController.getProducts);
route.get("/api/product/trash", productController.getTrashProducts);
route.post("/api/product", uploadImage, productController.insertProduct);
route.put("/api/product/:id",uploadImage, productController.updateProduct);
route.patch("/api/product/restore/:id", productController.restoreProduct);
route.patch("/api/product/soft-delete/:id", productController.softDeleteProduct);
route.delete("/api/product/:id", productController.deleteProduct);

route.get("/api/login", userController.login);
route.get("/api/user", userController.getUsers);
route.get("/api/user/trash", userController.getTrashUser);
route.post("/api/user", userController.insertUser);
route.put("/api/user/:id", userController.updateUser);
route.patch("/api/user/restore/:id", userController.restoreUser);
route.patch("/api/user/soft-delete/:id", userController.softDeleteUser);
route.delete("/api/user/:id", userController.deleteUser);

module.exports = route;
