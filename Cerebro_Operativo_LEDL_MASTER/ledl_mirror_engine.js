const { ethers } = require("ethers");
const fs = require("fs");

// Función de Espejo: Invierte la cadena
const mirrorLR = (s) => s.split("").reverse().join("");

// Función de Centro para Abajo (Radial): Toma el centro y expande
const radialExpand = (s) => {
    let center = Math.floor(s.length / 2);
    return s.substring(center) + s.substring(0, center);
};

async function runMirrorScan() {
    console.log("\n--- INICIANDO MOTOR DE ESPEJOS MULTIDIMENSIONALES ---");
    console.log(">> DIRECCIONES: L-R, R-L, RADIAL, TRANSPUESTA");
    
    const adn = fs.readFileSync("adn_normalizado.txt", "utf8").split("\n").filter(k => k.length === 64);
    const target = "0xa7c0d36c4698981fab42a7d8c783674c6fe2592d".toLowerCase();
    
    const total = adn.length;
    const startTime = Date.now();

    for (let i = 0; i < total; i++) {
        const raw = adn[i];
        
        // Generación de los 4 Espejos Simultáneos
        const projections = [
            raw,                     // Izquierda a Derecha (Normal)
            mirrorLR(raw),           // Derecha a Izquierda (Espejo)
            radialExpand(raw),       // Centro para Abajo (Radial)
            mirrorLR(radialExpand(raw)) // Transposición Inversa (Abajo para Arriba)
        ];

        for (let key of projections) {
            try {
                const wallet = new ethers.Wallet(key);
                if (wallet.address.toLowerCase() === target) {
                    console.log("\n\n------------------------------------------------");
                    console.log("!!! COLISIÓN DETECTADA EN EL ESPEJO !!!");
                    console.log(`DIRECCIÓN: ${wallet.address}`);
                    console.log(`LLAVE MAESTRA IDENTIFICADA: ${key}`);
                    console.log("------------------------------------------------");
                    process.exit(0);
                }
            } catch (e) { continue; }
        }

        if (i % 5000 === 0) {
            const percent = ((i/total)*100).toFixed(2);
            const elapsed = (Date.now() - startTime) / 1000;
            const speed = i / elapsed;
            const eta = speed > 0 ? ((total - i) / speed).toFixed(0) : "...";
            process.stdout.write(`\r[ESPEJOS] ${percent}% | ETA: ${eta}s | BLOQUE: ${i} | ANALIZANDO 4D... `);
        }
    }
    console.log("\n\n[!] Escaneo de espejos completado. AFRODITA sugiere aplicar variables k y M sobre los espejos.");
}

runMirrorScan();
