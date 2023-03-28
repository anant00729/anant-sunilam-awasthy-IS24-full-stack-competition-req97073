const fs = require('fs');
const path = require('path');
const productFile = 'products.json'

const filename = path.join(__dirname, productFile);

/* This function reads the products data from the JSON file 
   and returns it as an array of products. */
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

/* his function reads the products data from the JSON file and returns it as an array of products. 
   If the file does not exist, it returns an error message. */
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

/* This function reads the existing products from the file, 
   adds a new product to the list, and writes the updated list 
   of products back to the file. It returns the added product if successful, 
   and an error message if not. */
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


/*
This function reads the products data from the JSON file, searches for a 
product with a given ID, and returns it. If the product is not found, it 
returns an error message.
*/
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

/*
 This function reads the existing products from the file, updates a product 
 with new information, and writes the updated list of products back to the file. 
 It returns the updated product if successful, and an error message if not.
*/
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

/*
 This function reads the products data from the JSON file, filters 
 the products based on a given search query and type (searching for 
 Scrum Masters or Developers), and returns the filtered products.*/
exports.searchProduct = (query, searchType="SM") => {
  const products = getAllProductsFromJSONFile();

  const filteredProducts = products.filter(product => {
    const { scrumMasterName, developers } = product;
    if (searchType == "SM"){
      return scrumMasterName.includes(query)
    }else if(searchType == "D") {
      return developers.includes(query)
    }
  });
  return filteredProducts;
}
