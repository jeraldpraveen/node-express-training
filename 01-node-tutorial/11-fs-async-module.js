// In Screen if we click a button, then we use a callback function to perform some operations after that button is clicked....
// Same is Async
const fs = require("fs");

fs.readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  var first = result;
  fs.readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
    var second = result;
    fs.writeFile(
      "./content/result-aync.txt",
      `Here is the result : ${first},${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Done With Async");
      }
    );
  });
});
