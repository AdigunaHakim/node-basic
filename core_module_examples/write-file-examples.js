const { opendir, readFile, writeFile } = require('fs');
const { promisify } = require('util');

const filename = './test.txt';

opendir(filename, async (err, dir) => {
    if(err){
        await writeFile(filename, 'Hello World!', err => {
            if(err){
                console.log('Failed write file');
                return;
            } 

            console.log('Success write file');
            return;
        });
    } 

    console.log('File already exist!');
    return;
});