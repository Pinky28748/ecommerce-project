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
app.get("/api/search", (req, res) => {
  const query = req.query.q?.toLowerCase().trim() || "";
  const words = query.split(" ");

  const result = products.filter(product =>
    words.every(word =>
      product.title.toLowerCase().includes(word)
    )
  );

  res.json(result);
});
app.get("/api/suggestions", (req, res) => {
  const query = req.query.q?.toLowerCase() || "";

  const suggestions = products
    .filter(p => p.title.toLowerCase().includes(query))
    .map(p => p.title);

  res.json(suggestions);
});



const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});