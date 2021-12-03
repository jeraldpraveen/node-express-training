const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Server started on PORT 9000");
  res.end("Welcome To Express Tutorial");
});

server.listen(9000);
