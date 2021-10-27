var http = require("http");
var fs = require("fs");

// =========== METHOD - 1 =============================
// Increase big.txt to 1 Lakh data.....
// Go to Browser->Inspect-> Network -> Refresh the page -> Size 1.8MB
// Not Good Practise
// http
//   .createServer((req, res) => {
//     const text = fs.readFileSync("./content/big.txt", "utf8");
//     res.end(text);
//   })
//   .listen(5000);

// =========== METHOD - 2 =============================
http
  .createServer(function (req, res) {
    const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
