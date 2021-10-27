// Doc ---> https://nodejs.org/dist/latest-v17.x/docs/api/fs.html#class-fsreadstream

const { createReadStream } = require("fs");
const stream = createReadStream("./content/big.txt", { encoding: "utf-8" });

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => console.log(err));
