const express = require("express");
const { getProductList, addProduct, getProductByProductId } = require("../controllers/productController");
const { validateProductFields, validateProductId } = require("../middlewares/productValidator");
let _r = express.Router();

_r.get("/getProductList", getProductList);
_r.post("/addProduct", validateProductFields, addProduct);
_r.get("/product/:productId", validateProductId ,getProductByProductId);

module.exports = _r;
