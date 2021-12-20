const fs = require("fs");

const getNotes = function () {
  return "Your notes...";
};

const loadNotes = () => {
  try {
    const dataJSON = fs.readFileSync("notes.json", "utf-8");
    const parseJSON = JSON.parse(dataJSON);
    return parseJSON;
  } catch (e) {
    return [];
  }
};

const addNote = (title, body) => {};

module.exports = { getNotes, addNote };
