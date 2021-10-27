const fs = require("fs");

const first = fs.readFileSync("./content/first.txt", "utf-8");
const second = fs.readFileSync("./content/second.txt", "utf-8");

console.log(first);
console.log(second);

const third = fs.writeFileSync(
  "./content/third.txt",
  "Here is Third text created by Node"
);

const thirdappend = fs.appendFileSync(
  "./content/third.txt",
  `---------> This is text appended by Node`
);
