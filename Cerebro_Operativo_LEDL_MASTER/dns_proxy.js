const http = require('http');
const https = require('https');

const port = 8080; 
const targetGateway = 'https://ipfs.io/ipfs/bafybeic73vj5uxz52g4gbyy44nmny36xz2nzrlpzx4r2b2j4u6e625u7pq';

http.createServer((req, res) => {
    // Redirección transparente inmediata hacia la envoltura de cebolla global
    res.writeHead(301, { 'Location': targetGateway });
    res.end();
}).listen(port, '127.0.0.1', () => {
    console.log('🌐 [DNS PROXY]: Enrutador operativo para ensdeliz.ledl en puerto ' + port);
});
