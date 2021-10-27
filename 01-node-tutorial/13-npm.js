// npm - node package manager, comes with node
// npm --version

//local dependency - use it only in current project
// npm i <packageName>

// Global dependency - use it in any project
// npm i -g <packageName>

// package.json - manuifest dependencies(stores important info about project/package)
// manual approach (create package.json in root, create properties,etc)
// npm init (step by step, press Enter to skip)
// npm init -y (everything default)

// npm i validator
// npm i lodash

const lodash = require("lodash");
const items = [1, [2, [3, [4]]]];
const oneArray = lodash.flattenDeep(items);
console.log(oneArray);
