const express = require("express");
const app = express();
const logger = require("./10-logger");
const authorize = require("./10-authorize");

//  req => middleware => res
app.use([logger, authorize]);

// Functions in array will be executed in Order.....
// app.use([authorize, logger]);

app.get("/test", (req, res) => {
  res.send("Test");
});
app.get("/test1", (req, res) => {
  // We can add keys to request... That's why middleware is so powwerfull and crucial
  console.log(req.jerald);
  res.send("Test1");
});
app.get("/v1/test2", (req, res) => {
  res.send("Test2");
});
app.get("/v1/test3", (req, res) => {
  res.send("Test3");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
