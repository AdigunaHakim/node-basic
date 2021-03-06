const path = require('path');
const { fileURLToPath } = require('url');

console.log('dirname : ', __dirname);
console.log('filename : ', __filename);
console.log('basename : ', path.basename(__filename));
console.log('extension : ', path.extname(__filename));
console.log('parse : ', path.parse(__filename));

/* process.cwd is to get parrent process and its different with __dirname, 
prove it with create some module with console log process.cwd in that file, 
then call from this file */
console.log('Parent Process : ', path.basename(process.cwd));