// npm - globalcommand, comes with node

// npm --version

// local dependency 

// npm i packagename

// global dependency 

// sudo npm install -g packagename(mac)
// npm install -g packagename(window)

// package.json

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);