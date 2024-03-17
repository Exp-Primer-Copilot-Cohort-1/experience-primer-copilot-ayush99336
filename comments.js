const http = require('http');

// Create a Web Server
const server = http.createServer((req, res) => {
    // Handle incoming requests here
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});