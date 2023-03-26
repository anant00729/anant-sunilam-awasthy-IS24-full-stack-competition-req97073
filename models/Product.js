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