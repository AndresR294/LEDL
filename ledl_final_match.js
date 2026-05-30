const { ethers } = require("ethers");
const fs = require("fs");
const provider = new ethers.JsonRpcProvider("https://mainnet.base.org");

async function validate() {
    if (!fs.existsSync("llaves_ocultas.txt")) return console.log("DNA_ERROR: Archivo no encontrado.");
    
    const rawKeys = fs.readFileSync("llaves_ocultas.txt", "utf8").split("\n").filter(k => k.length === 64);
    const keys = [...new Set(rawKeys)];
    const total = keys.length;
    const targets = [
        "0xbaed383ede0e5d9d72430661f3285daa77e9439f", 
        "0xa7c0d36c4698981fab42a7d8c783674c6fe2592d",
        "0x4200000000000000000000000000000000000006"
    ].map(t => t.toLowerCase());

    console.log(`\n[NÚCLEO ENSDELIZ] CARGANDO ${total} FRAGMENTOS DE ADN...`);
    const startTime = Date.now();

    for (let i = 0; i < total; i++) {
        try {
            const key = keys[i];
            const wallet = new ethers.Wallet(key);
            
            // Verificación de Latido (Cada 1000 llaves)
            if (i % 1000 === 0 || i === total - 1) {
                const percent = ((i / total) * 100).toFixed(2);
                const elapsed = (Date.now() - startTime) / 1000;
                const speed = i / elapsed;
                const remaining = speed > 0 ? ((total - i) / speed).toFixed(0) : 0;
                
                process.stdout.write(`\r[PROGRESO] [${"#".repeat(Math.floor(percent/5))}${".".repeat(20-Math.floor(percent/5))}] ${percent}% | ETA: ${remaining}s | ANALIZANDO: ${key.substring(0,8)}... `);
            }

            if (targets.includes(wallet.address.toLowerCase())) {
                const balance = await provider.getBalance(wallet.address);
                console.log("\n\n------------------------------------------------");
                console.log("!!! ACCESO TOTAL CONCEDIDO A LA BÓVEDA !!!");
                console.log(`LLAVE MAESTRA: ${key}`);
                console.log(`DIRECCIÓN: ${wallet.address}`);
                console.log(`BALANCE: ${ethers.formatEther(balance)} ETH`);
                console.log("------------------------------------------------");
                process.exit(0);
            }
        } catch (e) { continue; }
    }
    console.log("\n\n--- BÚSQUEDA FINALIZADA: Sin coincidencias en este sector ---");
}
validate();
