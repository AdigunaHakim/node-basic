const { createReadStream, createWriteStream } = require('fs');

const readStream = createReadStream('./test.txt');
const writeStream = createWriteStream('./test_again.txt');

/* create pipe from read stream to write stream, with tiny size file its not necessary to use stream
but its important when huge size file */
readStream.pipe(writeStream);