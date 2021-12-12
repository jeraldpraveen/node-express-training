const express = require("express");
const app = express();
const routerController = require("./14-router-controller-people");

app.use(express.static("./files-for-request-methods"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/people", routerController);

app.listen(5000);
