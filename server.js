const fs = require("fs");
const express = require("express");
const productRoute = require("./routers/productRoute");
const path = require("path");
const cors = require('cors')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// Create an instance of express
const app = express();

// Parse incoming request bodies in a middleware before your handlers
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Serve the static files from public/build and public directories
app.use(express.static("public/build"));
app.use(express.static("public"));

// Set up Swagger documentation at /api/api-docs and the product route at /api
app.use("/api/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api", productRoute);

// Set up a fallback route to serve the index.html file for client-side routing
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "build", "index.html"));
});

// Check if the products.json file exists, and create it if it doesn't
const checkAndCreateProductJSONFileToStoreData = () => {
  const productsFile = path.join(__dirname, 'models' , 'products.json');
  if (!fs.existsSync(productsFile)) {
    fs.writeFileSync(productsFile, '[]');
  }
}

// Start the server on the specified port
const PORT = process.env.PORT || 5010;
app.listen(PORT, () => {
  checkAndCreateProductJSONFileToStoreData();
  console.log(`Server is running on Port ${PORT}`);
});