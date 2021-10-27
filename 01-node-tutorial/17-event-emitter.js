// Normally we handle button clicks in Js.
// Is it possible to handle button click on server side???? Answer is Yes.
// Event Driven Programming is Heavily used in NodeJs

const EventEmitter = require("events");
const customEmitter = new EventEmitter();
// [[customEmitter.on]] similar to listening event of button click on screen
// [[customEmitter.emit]]similar to clicking button on screen

// =========== METHOD - 1 =============================
// customEmitter.on("response", () => {
//   console.log(`data received`);
// });
// customEmitter.on("response", () => {
//   console.log(`Some other Logic`);
// });

// customEmitter.emit("response");

// =========== METHOD - 2 =============================
// It wont work...Because event is not listened first...
// Button is clicked and then our code waits for button click...So doesn't work
// customEmitter.emit("response");
// customEmitter.on("response", () => {
//   console.log(`data received`);
// });

// =========== METHOD - 3 =============================
// Passing Params
customEmitter.on("response", (name, id) => {
  console.log(`data received for ${name} with age ${id}`);
});
customEmitter.emit("response", "jerald", 28);
