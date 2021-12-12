const express = require("express");
const app = express();
const people = require("./data-of-people");

// In Browser --> http://localhost:5000/index.html
app.use(express.static("./files-for-request-methods"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// GET
app.get("/api/people", (req, res) => {
  res.json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please Provide Name Value" });
  }
  res.status(201).json({ sucess: true, person: name });
});

// POST
app.post("/login", (req, res) => {
  console.log(req.body);
  // name is from index.html Input Field ${name} property
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please provide Name");
});
// POST FOR POSTMAN APP
app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "No name sent from POSTMAN" });
  }
  res.status(200).send({
    success: true,
    data: [...people, { id: people.length + 1, name: name }],
  });
});

app.listen(5000);
