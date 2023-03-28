const fs = require('fs');
const path = require('path');
const productFile = 'products.json'

const filename = path.join(__dirname, productFile);

const getAllProductsFromJSONFile = () => {
  // Read the existing products from the file
  let products = [];
  if (fs.existsSync(filename)) {
    try {
      const data = fs.readFileSync(filename);
      products = JSON.parse(data);
      return products
    } catch (err) {
      return `Error writing to ${filename}: ${err}`
    }
  } 
}

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
  const products = getAllProductsFromJSONFile()
  if(typeof products === "string") return products;
  
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

exports.getProductByProductId = (productId) => {
  const products = getAllProductsFromJSONFile()
  if(typeof products === "string") return products;
  const product = products.find(p => p.productId === productId);

  if (product) {
    // Send the product object as the response
    return product;
  } else {
    // Send an error message if the product is not found
    return `Product not found with the ${productId}`;
  }
}


exports.updateProduct = (product) => {
  const products = getAllProductsFromJSONFile()
  if(typeof products === "string") return products;
  const index = products.findIndex(p => p.productId === product.productId); 
  if (index === -1) {
    return `Product with ID ${product.productId} not found`;
  }
  products[index] = product;

  // Write the updated list of products back to the file
  try {
    const data = JSON.stringify(products, null, 2);
    fs.writeFileSync(filename, data);
    return product;
  } catch (err) {
    return `Error writing to ${filename}: ${err}`;
  }
}






