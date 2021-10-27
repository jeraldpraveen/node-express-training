// Better solution for blocking would be turning function into promise
// =========== METHOD - 1 =============================
// const { readFile } = require("fs");
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };
// getText("../content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// =========== METHOD - 2 =============================
// const { readFile } = require("fs");
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };
// const start = async () => {
//   try {
//     const first = await getText("../content/first.txt");
//     const second = await getText("../content/second.txt");
//     console.log(first, second);
//   } catch (error) {
//     console.log(error);
//   }
// };
// start();

// =========== METHOD - 3 =============================
// const { readFile } = require("fs");
// const util = require("util");
// const readFilePromise = util.promisify(readFile);

// const start = async () => {
//   try {
//     const first = await readFilePromise("../content/first.txt", "utf-8");
//     const second = await readFilePromise("../content/second.txt", "utf-8");
//     console.log(first, second);
//   } catch (error) {
//     console.log(error);
//   }
// };
// start();

// =========== METHOD - 4 =============================
const { readFile, writeFile } = require("fs").promises;
const start = async () => {
  try {
    const first = await readFile("../content/first.txt", "utf8");
    const second = await readFile("../content/second.txt", "utf8");
    await writeFile(
      "../content/result-await-jerald.txt",
      `THIS IS AWESOME : ${first} ${second}`
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
start();
