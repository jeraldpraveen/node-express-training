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

  const duplicateTitle = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicateTitle.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("New Note Added");
  } else {
    console.log("Note Title Taken!!!!!!");
  }
};

const removeNote = (title) => {
  const notes = loadNotes();

  const notesToKeep = notes.filter((note) => {
    return note.title !== title;
  });
  console.log(notesToKeep);

  if (notes.length > notesToKeep.length) {
    console.log("Note removed");
    saveNotes(notesToKeep);
  } else {
    console.log("No Note Found");
  }
};

const listAllNotes = () => {
  const notes = loadNotes();

  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readANote = (title) => {
  const notes = loadNotes();

  const findTitle = notes.find((note) => {
    return note.title === title;
  });
  if (findTitle) {
    console.log(`Body contains ${findTitle.body}`);
  } else {
    console.log("No Data Found");
  }
};

module.exports = { getNotes, addNote, removeNote, listAllNotes, readANote };
