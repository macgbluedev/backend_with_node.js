const fs = require('fs');

const server = require('http').createServer();

server.on('request', (req, res) => {
    const src = fs.createReadStream('./big');
    src.pipe(res);
});

server.listen(3000);
console.log('Servidor en la url http://localhost:3000');