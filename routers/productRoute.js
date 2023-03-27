const express = require("express");
const { getProductList, addProduct } = require("../controllers/productController");
const { validateProductFields } = require("../middlewares/productValidator");
let _r = express.Router();

_r.get("/getProductList", getProductList);
_r.post("/addProduct", validateProductFields, addProduct);

module.exports = _r;
