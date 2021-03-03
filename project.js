const { sum, substract } = require('./myModule');
const sumModule = require('./myModule/sum');

console.log(sum(8, 9));
console.log(substract(10, 9));
console.log(sumModule(8, 9));