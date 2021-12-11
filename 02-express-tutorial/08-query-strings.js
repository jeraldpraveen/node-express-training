// https://hn.algolia.com/api
// Content we send after '?' is not url, they are query string
// Query Strings are key and value pairs... You can't give random values.. Keys are designed on Server

const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send(`<h1>HOME</h1><a href="/api/products">Products</a>`);
});

// IN Browser
// http://localhost:5000/api/v1/query?search=B&limit=2
// Return Statement must be used(Since only one response must be sent)
app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    return res.status(200).send("NO Product Matched Your Search");
  }

  return res.json(sortedProducts);
});

app.listen(5000);
