const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send(`<h1>HOME</h1><a href="/api/products">Products</a>`);
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, price } = product;
    return { id, name, price };
  });
  res.json(newProducts);
});

//Defining Routes is like providing Place Holders(:productID)
app.get("/api/products/:productID", (req, res) => {
  console.log(req.params);
  const singleProduct = products.find(
    (product) => product.id === Number(req.params.productID)
  );

  if (!singleProduct) {
    return res.status(404).send("Product NOT Available");
  }
  res.json(singleProduct);
});

// We can have multiple Route Plaeholders TOO
// We can define as many as complex routes with url params
app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  res.send(`You are reading the Review Done by ${req.params.reviewID}`);
});

app.listen(5000);
