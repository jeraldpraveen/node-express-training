const yargs = require("yargs");
const notes = require("./notes.js");

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
    body: {
      describe: "Note Content",
      demandOption: true,
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});
// In Terminal Execute [[node app.js --help]]
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note Title To Remove",
      demandOption: true,
    },
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  },
});
yargs.command({
  command: "list",
  describe: "List all Notes",
  builder: {
    title: {
      describe: "List All Notes",
    },
  },
  handler: () => {
    notes.listAllNotes();
  },
});
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Read A Note",
      demandOption: true,
    },
  },
  handler: (argv) => {
    notes.readANote(argv.title);
  },
});
// In Terminal Execute [[node app.js --add]]
// In Terminal Execute [[node app.js --remove]]
// In Terminal Execute [[node app.js --read]]
// In Terminal Execute [[node app.js --list]]

yargs.parse();
// console.log(yargs.argv);
