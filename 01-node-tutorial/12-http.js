const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome To Node");
    res.end();
  } else if (req.url === "/jerald") {
    res.end("Here is our Jerald's Page");
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `);
  }
});

server.listen(5000);

// Terminal --> node 12-http.js
// Browser --> localhost:5000
