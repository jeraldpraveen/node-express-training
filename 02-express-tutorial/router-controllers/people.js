let people = require("../data-of-people");

const getPeople = (req, res) => {
  res.json({ success: true, data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please Provide Name Value" });
  }
  res.status(201).json({ sucess: true, person: name });
};

const createPersonFromPostman = (req, res) => {
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
};

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
};

const deletePerson = (req, res) => {
  const id = req.params.id;
  console.log(id);
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  res.json({ success: true, data: newPeople });
};

module.exports = {
  getPeople,
  createPerson,
  createPersonFromPostman,
  updatePerson,
  deletePerson,
};
