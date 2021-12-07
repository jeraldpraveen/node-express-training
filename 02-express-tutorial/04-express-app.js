const express = require("express");
const app = express();

// setup static and middleware
app.use(express.static("./navbar-app"));

app.get("/", (req, res) => {
  // Server side rendering
  // Next line No need if express.static is used and index.html file exists
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000....");
});
