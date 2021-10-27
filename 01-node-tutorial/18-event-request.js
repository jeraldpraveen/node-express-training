// Docs ---> https://nodejs.org/dist/latest-v16.x/docs/api/http.html#class-httpserver

const http = require("http");

// Using Normal callback
// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer();
// emits request event
// subcribe to it / listen for it / respond to it
server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5000);
