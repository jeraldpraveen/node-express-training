const getNotes = require("./notes.js");

const msg = getNotes();
console.log(msg);

console.log(process.argv);

const command = process.argv[2];
if (command === "add") {
  console.log("Adding Note");
} else {
  console.log("Remove Note");
}

// In Terminal run [[node app.js add --title='This is my title']]
// process.argv has to be sliced for --title ---> COMPLEX PROCESS
