const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    // Create a simple dynamic message
    const message = `
        Hello World!
        Today is ${new Date().toLocaleDateString()}.
        Your request was received from ${req.socket.remoteAddress}.
    `;
    
    res.end(message);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
