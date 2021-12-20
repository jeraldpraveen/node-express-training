const fs = require("fs");
const body = {
  title: "Half Girlfriend",
  author: "chetan bhagat",
};

const bookJSON = JSON.stringify(body);

const parseJSON = JSON.parse(bookJSON);

fs.writeFileSync("1-json.json", bookJSON);

const output = fs.readFileSync("1-json.json", "utf-8");
console.log(output);
const data = JSON.parse(output);
console.log(data.title);
