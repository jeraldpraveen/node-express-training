const express = require("express");
const app = express();
const people = require("./data-of-people");

// In Browser --> http://localhost:5000/index.html
app.use(express.static("./files-for-request-methods"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// GET FROM BROWSER
app.get("/api/people", (req, res) => {
  res.json({ success: true, data: people });
});
// POST FROM JAVASCRIPT.HTML
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please Provide Name Value" });
  }
  res.status(201).json({ sucess: true, person: name });
});
// POST FROM INDEX.HTML
app.post("/login", (req, res) => {
  console.log(req.body);
  // name is from index.html Input Field ${name} property
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please provide Name");
});
// POST FROM POSTMAN APP
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
// PUT FROM POSTMAN APP
app.put("/api/postman/people/:id", (req, res) => {
  const name = req.body.name;
  const id = req.params.id;
  console.log(id, name);
  // res.json("Update Success");
  const index = people.findIndex((person) => {
    return person.id.toString() === id;
  });
  people[index] = { id: id, name: name };
  res.json({ success: true, data: people });
});
// DELETE FROM POSTMAN APP
app.delete("/api/postman/people/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  res.json({ success: true, data: newPeople });
});
app.listen(5000);
