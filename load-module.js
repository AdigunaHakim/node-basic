const { sum, substract } = require('./my_module');
const sumModule = require('./my_module/sum');

console.log(sum(8, 9));
console.log(substract(10, 9));
console.log(sumModule(8, 9));