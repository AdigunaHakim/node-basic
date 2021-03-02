const{ pbkdf2 } = require('crypto');

const start = Date.now();

pbkdf2('password', 'mySecret', 10000, 1000, 'sha256', () => {
    console.log('Done ', Date.now() - start);
});

console.log('This will be executed first ', Date.now() - start);