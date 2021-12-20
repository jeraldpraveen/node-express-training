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

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const addNote = (title, body) => {
  const notes = loadNotes();
  notes.push({
    title: title,
    body: body,
  });
  saveNotes(notes);
};

module.exports = { getNotes, addNote };
