const os = require("os");

//Info About urrent user
const user = os.userInfo();
console.log(user);
console.log(os.hostname());
console.log(os.networkInterfaces());

// Method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
