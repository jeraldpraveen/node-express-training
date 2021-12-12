const express = require("express");
const router = express.Router();
const people = require("../data-of-people");

// MOVE ALL ROUTES starting with [['/api/people']] FROM ${12-req-methods.js}
router.get("/", (req, res) => {
  res.json({ success: true, data: people });
});
router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please Provide Name Value" });
  }
  res.status(201).json({ sucess: true, person: name });
});
// Modified Route "/api/postman/people"===>"/api/people/postman"
router.post("/postman", (req, res) => {
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
// Modified Route "/api/postman/people"===>"/api/people/postman"
router.put("/postman/:id", (req, res) => {
  const name = req.body.name;
  const id = req.params.id;
  console.log(id, name);
  const index = people.findIndex((person) => {
    return person.id.toString() === id;
  });
  people[index] = { id: id, name: name };
  res.json({ success: true, data: people });
});
// Modified Route "/api/postman/people"===>"/api/people/postman"
router.delete("/postman/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  res.json({ success: true, data: newPeople });
});

module.exports = router;
