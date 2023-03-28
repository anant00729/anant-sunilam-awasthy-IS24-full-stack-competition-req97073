const { getAllProductList, addProduct, getProductByProductId, updateProduct, searchProduct } = require('../models/Product')
const { validationResult } = require('express-validator');

// Returns a list of all products
exports.getProductList = (req, res) => {
  const results = getAllProductList()
  if (typeof results === 'object') {
    return res.status(200).json({ status : true, productList : results})
  }else if(typeof results === 'string'){
    return res.status(500).json({ status : false, message : results})
  }
};

// Adds a new product
exports.addProduct = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ status: false, errors: errors.array() });
  }
  
  const product = req.body || {}
  const results = addProduct(product)
  if (typeof results === 'object') {
    return res.status(200).json({ status : true, addProduct : results})
  }else if(typeof results === 'string'){
    return res.status(500).json({ status : false, message : results})
  }
};

// Returns a single product with the given productId
exports.getProductByProductId = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ status: false, errors: errors.array()});
  }
  const productId = req.params.productId || '';
  const results = getProductByProductId(productId)
  if (typeof results === 'object') {
    return res.status(200).json({ status : true, product : results})
  }else if(typeof results === 'string'){
    return res.status(404).json({ status : false, message : results})
  }
};

// Updates an existing product
exports.updateProduct = (req,res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ status: false, errors: errors.array()});
  }

  const product = req.body || {}
  const results = updateProduct(product)
  if (typeof results === 'object') {
    return res.status(200).json({ status : true, product : results})
  }else if(typeof results === 'string'){
    return res.status(500).json({ status : false, message : results})
  }
}

// Searches for products based on the given search query and search type
exports.searchProduct = (req,res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ status: false, errors: errors.array()});
  }
   
  const { query, searchType } = req.body; 
  const results = searchProduct(query, searchType)
  return res.status(200).json({ status : true, productList : results})
}