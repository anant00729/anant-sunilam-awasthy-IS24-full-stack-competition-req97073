const fs = require('fs');
const path = require('path');
const productFile = 'products.json'

const filename = path.join(__dirname, productFile);

exports.getAllProductList = () => {
  if (fs.existsSync(filename)) {
    try {
      const data = fs.readFileSync(filename);
      const products = JSON.parse(data);
      return products;
    } catch (err) {
      return `Error reading ${filename}: ${err}`;
    }
  } else {
    return `${filename} does not exist`;
  }
};

exports.addProduct = (product) => {
  // Read the existing products from the file
  let products = [];
  if (fs.existsSync(filename)) {
    try {
      const data = fs.readFileSync(filename);
      products = JSON.parse(data);
    } catch (err) {
      return `Error writing to ${filename}: ${err}`;
    }
  }
  
  // Add the new product to the existing list of products
  products.push(product);

  // Write the updated list of products back to the file
  try {
    const data = JSON.stringify(products, null, 2);
    fs.writeFileSync(filename, data);
    return product
  } catch (err) {
    return `Error writing to ${filename}: ${err}`;
  }
};