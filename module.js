console.log('Include module.js');
const fs = require('fs');

let readFile = (/*param*/) => {
  let result = fs.readFileSync('helloworld.txt', 'utf-8');
  console.log(`read file done ${result}`);
}

module.exports = {
  readFile
}
