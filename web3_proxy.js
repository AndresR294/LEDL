const http = require('http');

const port = 8080;
const ipfsTarget = 'https://ipfs.io/ipfs/bafybeic73vj5uxz52g4gbyy44nmny36xz2nzrlpzx4r2b2j4u6e625u7pq';

// Tabla de enrutamiento inmutable aprobada por el Director
const DOMINIOS_AUTORIZADOS = {
    'ensdeliz.ledl': true,
    'ensdeliz.cb.id': true,
    'ensdeliz.base.eth': true,
    'ensdeliz.eth': true,
    'ledl-web-repo-1.onrender.com': true // Redirección por contingencia de caída
};

http.createServer((req, res) => {
    const host = req.headers.host ? req.headers.host.toLowerCase().split(':')[0] : '';
    
    // Filtro de exclusión estricto: Bloquear si se intenta inyectar extensiones de scripts o desarrollo
    if (host.endsWith('.xyz') || host.endsWith('.sh') || host.endsWith('.bash')) {
        res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('🛡️ [AIKO® SECURITY]: Acceso denegado. Extensión reservada para scripts de desarrollo local.');
        return;
    }

    // Enrutamiento transparente directo al enjambre de cebolla global
    res.writeHead(301, { 'Location': ipfsTarget });
    res.end();
}).listen(port, '127.0.0.1', () => {
    console.log('🌐 [NODO WEB3]: Escuchando peticiones unificadas en puerto ' + port);
});
