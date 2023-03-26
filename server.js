const express = require("express");
const productRoute = require("./routers/productRoute");
const path = require("path");
const cors = require('cors')
const app = express();
var bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public/build"));
app.use(express.static("public"));

app.use("/api", productRoute);

const PORT = process.env.PORT || 5010;

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});