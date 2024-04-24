const http = require('http');

// Creating a simple HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello, Node.js!</h1>');
    res.end();
});

// Start listening on port 3000
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
