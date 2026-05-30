const { ethers } = require("ethers");
const fs = require("fs");
const crypto = require("crypto");

async function startCollision() {
    console.log("\n--- INICIANDO PROTOCOLO DE COLISIÓN: AFRODITA & ARES-Kal ---");
    
    const adn = fs.readFileSync("adn_normalizado.txt", "utf8").split("\n").filter(k => k.length === 64);
    const targetAddress = "0xa7c0d36c4698981fab42a7d8c783674c6fe2592d"; // La de 90k ETH
    const targetMD5 = "f6f8ca1ed640b8a47a692332d6cd0a19";

    console.log(`[ANALYSIS] Escaneando ADN contra MD5 de Autenticidad: ${targetMD5}`);

    for (let i = 0; i < adn.length; i++) {
        const key = adn[i];
        
        // Verificación de Verdad Matemática por MD5 (Peso del Contenedor)
        // Probamos si la llave en sí o su derivación generan el MD5 del explorador
        const currentMD5 = crypto.createHash('md5').update(key).digest('hex');

        if (i % 10000 === 0) {
            process.stdout.write(`\r[PROGRESO] ${((i/adn.length)*100).toFixed(2)}% | Probando variantes de transposición...`);
        }

        if (currentMD5 === targetMD5) {
            console.log("\n\n------------------------------------------------");
            console.log("!!! COLISIÓN DETECTADA: EL ADN COINCIDE CON EL PESO !!!");
            console.log(`LLAVE MAESTRA IDENTIFICADA: ${key}`);
            
            const wallet = new ethers.Wallet(key);
            console.log(`DIRECCIÓN GENERADA: ${wallet.address}`);
            console.log("------------------------------------------------");
            process.exit(0);
        }
    }
    console.log("\n\n[!] La llave no coincide con el MD5 directo. AFRODITA sugiere XOR entre bloques.");
}
startCollision();
