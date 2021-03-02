const http = require('http');
const port = 3000;
const server = http.createServer();

server.listen(port, () => {
    console.log(`server is now running on port ${port}`);
});