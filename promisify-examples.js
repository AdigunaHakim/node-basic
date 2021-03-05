const { readFile } = require('fs');
const { promisify } = require('util');

// traditional style to read file with callback
// readFile('./callback-examples.js', 'utf8', (err, data) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data);
// });

// convert readFile callback function to promise with promisify
const read = promisify(readFile);
read('./callback-examples.js', 'utf8')
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
});

