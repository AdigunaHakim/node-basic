const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/' :
            res.end('This Is Home Page');
            break;
        case '/admin' :
            res.end('This Is Admin Page');
            break;
        case '/user' :
            res.end('This Is User Page');
            break;
        default :
            res.end('404 Not Found')
            break;
    } 
});

server.listen(port, () => {
    console.log(`server is now running on port ${port}`);
});