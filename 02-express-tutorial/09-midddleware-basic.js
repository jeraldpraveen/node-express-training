const express = require("express");
const app = express();

// console.log(method, url, date) logic is used MAYBE in 15 routes..
// Won't copy & paste same logic is waste of Time & Duplicate code
// Here we make use of Middleware
app.get("/home", (req, res) => {
  const method = req.method;
  const url = req.url;
  const date = new Date().getFullYear();
  console.log(method, url, date);
  res.send("Home");
});

app.get("/about", (req, res) => {
  const method = req.method;
  const url = req.url;
  const date = new Date().getFullYear();
  console.log(method, url, date);
  res.send("About");
});

// req => Middleware => res
// Middleware Function
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const date = new Date().getFullYear();
  console.log(method, url, date);
  // next() must be called or res.send() must be written
  // Or else browser keep on loading
  next();
  // res.send("Testing");
};

//USE of Middleware
app.get("/test", logger, (req, res) => {
  res.send("Test");
});

app.listen(5000);
