const { pbkdf2 } = require('crypto');
const { createServer } = require('http');

const port = 3000;
const start = Date.now();

const hash = () => {
    pbkdf2('password', 'mySecret', 10000, 1000, 'sha256', () => {
        console.log('Hash Done', Date.now() - start);
    })
};

const listen = () => {
    createServer().listen(port, () => {
        console.log(`server is now running`, Date.now() - start);
    });
};

//stack will receive and process by libuv, and sent to event loop
hash();
hash();
hash();
hash();
listen();
