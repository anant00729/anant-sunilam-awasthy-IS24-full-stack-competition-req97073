const express = require("express");
const { getProductList } = require("../controllers/productController");
let _r = express.Router();

_r.get("/getProductList", getProductList);

module.exports = _r;
