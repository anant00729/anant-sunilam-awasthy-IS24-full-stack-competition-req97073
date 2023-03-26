const { getAllProductList } = require('../models/Product')

exports.getProductList = async (req, res) => {
  const results = getAllProductList()
  if (typeof results === 'object') {
    res.status(200).json({ status : true, productList : results})
  }else if(typeof results === 'string'){
    res.status(500).json({ status : false, message : results})
  }
};

exports.addProduct = async (req, res) => {

};