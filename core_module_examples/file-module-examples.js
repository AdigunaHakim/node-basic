const { opendir } = require('fs');
const { promisify } = require('util');

const oDir = promisify(opendir);

// callback opendir is async, so we use handle it with async/await for each loop
oDir('./')
.then(async (dir) => {
    for await (let dirent of dir) {
        console.log(dirent.name)
    }
})
.catch(err => {
    console.log(err);
})