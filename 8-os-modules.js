const os = require('os');


// info about current users
const user = os.userInfo()

console.log(user);
// method returns the sytem up time
console.log(`The system uptime is ${os.uptime()} seconds`);

// more Os

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs);