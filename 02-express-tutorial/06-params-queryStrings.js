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

app.get("/api/products/1", (req, res) => {
  const singleProduct = products.find((product) => product.id === 1);
  res.json(singleProduct.desc);
});

app.get("/api/products/2", (req, res) => {
  const singleProduct = products.find((product) => product.id === 2);
  res.json(singleProduct.desc);
});

app.get("/api/products/3", (req, res) => {
  const singleProduct = products.find((product) => product.id === 3);
  res.json(singleProduct.desc);
});

app.get("/api/products/4", (req, res) => {
  const singleProduct = products.find((product) => product.id === 4);
  res.json(singleProduct.desc);
});

app.listen(5000);
