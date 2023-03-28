const express = require("express");
const { getProductList, addProduct, getProductByProductId, updateProduct, searchProduct } = require("../controllers/productController");
const { validateProductFields, validateProductId, validateSearch } = require("../middlewares/productValidator");
let _r = express.Router();

_r.get("/getProductList", getProductList);
_r.post("/addProduct", validateProductFields, addProduct);
_r.get("/product/:productId", validateProductId ,getProductByProductId);
_r.post("/updateProduct", validateProductFields, updateProduct);
_r.post("/searchProduct",  validateSearch, searchProduct);


module.exports = _r;
