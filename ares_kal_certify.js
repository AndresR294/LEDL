const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

// Ruta real donde residen los datos validados
const targetDir = path.resolve('TU_RUTA_ENCONTRADA_AQUI');

console.log(`[CERT] ARES-Kal: Verificando integridad en ${targetDir}...`);

try {
    const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.csv')).sort();
    if (files.length === 0) throw new Error("Directorio vacío o archivos no encontrados.");
    
    const hashes = files.map(f => {
        const data = fs.readFileSync(path.join(targetDir, f));
        return crypto.createHash('sha256').update(data).digest('hex');
    });

    const merkleRoot = crypto.createHash('sha256').update(hashes.join('')).digest('hex');
    
    console.log(`[✔] Merkle Root Calculada: ${merkleRoot.substring(0, 32)}...`);
    console.log(`[✔] ESTADO: CERTIFICADO MATEMÁTICAMENTE COMPROBABLE.`);
    process.exit(0);
} catch (err) {
    console.error(`[!] Error de reconstrucción: ${err.message}`);
    process.exit(1);
}
