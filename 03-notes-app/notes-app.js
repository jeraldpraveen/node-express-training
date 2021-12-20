const yargs = require("yargs");
const getNotes = require("./notes.js");

// In Terminal [[node app.js --version]]
// Customize YARGS
yargs.version("5.5.5");

// add ,rremove,read,list notes
// Create Add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
    },
  },
  handler: () => {
    console.log("Adding a New Note");
  },
});
// In Terminal Execute [[node app.js --help]]
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: () => {
    console.log("Remove a  Note");
  },
});
yargs.command({
  command: "list",
  describe: "List all Notes",
  handler: () => {
    console.log("List all Notes");
  },
});
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: () => {
    console.log("Read a  Note");
  },
});
// In Terminal Execute [[node app.js --add]]
// In Terminal Execute [[node app.js --remove]]
// In Terminal Execute [[node app.js --read]]
// In Terminal Execute [[node app.js --list]]

console.log(yargs.argv);
