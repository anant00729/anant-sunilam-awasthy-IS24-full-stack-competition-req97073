const fs = require("fs");
const express = require("express");
const productRoute = require("./routers/productRoute");
const path = require("path");
const cors = require('cors')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
var bodyParser = require('body-parser')


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public/build"));
app.use(express.static("public"));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api", productRoute);

const PORT = process.env.PORT || 5010;

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "build", "index.html"));
});

const checkAndCreateProductJSONFileToStoreData = () => {
  const productsFile = path.join(__dirname, 'models' , 'products.json');
   // Check if the file exists
   if (!fs.existsSync(productsFile)) {
    // Create the file with an empty array
    fs.writeFileSync(productsFile, '[]');
  }
}

app.listen(PORT, () => {
  checkAndCreateProductJSONFileToStoreData();
  console.log(`Server is running on Port ${PORT}`);
});