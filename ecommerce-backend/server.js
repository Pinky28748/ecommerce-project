const express = require("express");
const cors = require("cors");

const products = require("./data/products");

const app = express();

app.use(cors());
app.use(express.json());


// GET all products
app.get("/api/products", (req, res) => {
  res.json(products);
});


// GET single product
app.get("/api/products/:id", (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
});



const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});