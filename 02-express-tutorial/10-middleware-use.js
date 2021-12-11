const express = require("express");
const app = express();
const logger = require("./10.logger");

//  req => middleware => res
app.use(logger);

app.get("/test", (req, res) => {
  res.send("Test");
});
app.get("/test1", (req, res) => {
  res.send("Test1");
});
app.get("/v1/test2", (req, res) => {
  res.send("Test2");
});
app.get("/v1/test3", (req, res) => {
  console.log(req.user);
  res.send("Test3");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
