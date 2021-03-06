const { opendir, stat } = require('fs');
const { promisify } = require('util');

const getDir = promisify(opendir);
const getStat = promisify(stat);

// callback opendir is async, so we use handle it with async/await for each loop
getDir('./')
.then(async (dir) => {
    for await (let dirent of dir) {
        console.log(dirent.name)
    }
})
.catch(err => {
    console.log(err);
});

getStat('./app.js')
.then(stat => {
    console.log(stat);
})
.catch(err => {
    console.log(err);
});