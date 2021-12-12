const express = require("express");
const router = express.Router();
const people = require("./data-of-people");
const {
  getPeople,
  createPerson,
  createPersonFromPostman,
  updatePerson,
  deletePerson,
} = require("./router-controllers/people");

// router.get("/", getPeople);
// router.post("/", createPerson);
// router.post("/postman", createPersonFromPostman);
// router.put("/postman/:id", updatePerson);
// router.delete("/postman/:id", deletePerson);

// Alternative Syntax ---> Chaining
router.route("/").get(getPeople).post(createPerson);
router.route("/postman").post(createPersonFromPostman);
router.route("/postman/:id").put(updatePerson).delete(deletePerson);

module.exports = router;
