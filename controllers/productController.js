const { getAllProductList, addProduct, getProductByProductId } = require('../models/Product')
const { validationResult } = require('express-validator');

exports.getProductList = (req, res) => {
  const results = getAllProductList()
  if (typeof results === 'object') {
    return res.status(200).json({ status : true, productList : results})
  }else if(typeof results === 'string'){
    return res.status(500).json({ status : false, message : results})
  }
};

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


exports.getProductByProductId = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ status: false, errors: errors.array() });
  }
  const productId = req.params.productId || '';
  const results = getProductByProductId(productId)
  if (typeof results === 'object') {
    return res.status(200).json({ status : true, product : results})
  }else if(typeof results === 'string'){
    return res.status(404).json({ status : false, message : results})
  }
};


