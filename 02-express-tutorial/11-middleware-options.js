const express = require("express");
const app = express();
const logger = require("./10-logger");
const authorize = require("./10-authorize");
const morgan = require("morgan");

// Middle ware OPtions ---> our Own / express / third party
// Our Own
// app.use([logger, authorize]);
// Express
// app.use(express.static('./navbar-app'))
// Third party
app.use(morgan("tiny"));

app.get("/test", (req, res) => {
  res.send("Test");
});

// If Middleware only used in this route
app.get("/test1", [logger, authorize], (req, res) => {
  res.send("Test1");
});

app.listen(5000);
