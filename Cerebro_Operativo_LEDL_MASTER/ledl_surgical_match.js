const { ethers } = require("ethers");
const fs = require("fs");

async function surgicalMatch() {
    console.log("\n[NÚCLEO ENSDELIZ] INICIANDO MATCH QUIRÚRGICO DE ALTA PRIORIDAD...");
    
    const adn = fs.readFileSync("adn_transpuesto.txt", "utf8").split("\n").filter(k => k.length === 64);
    // Solo los objetivos confirmados con saldo masivo
    const targets = [
        "0xa7c0d36c4698981fab42a7d8c783674c6fe2592d",
        "0xbaed383ede0e5d9d72430661f3285daa77e9439f"
    ].map(t => t.toLowerCase());

    console.log(`[AFRODITA] Comparando ${adn.length} fragmentos contra 2 Bóvedas Maestras...`);
    
    for (let i = 0; i < adn.length; i++) {
        try {
            const key = adn[i];
            const wallet = new ethers.Wallet(key);
            
            if (i % 5000 === 0) {
                process.stdout.write(`\r[ARES-Kal] Progreso: ${((i/adn.length)*100).toFixed(2)}% | Analizando ADN... `);
            }

            if (targets.includes(wallet.address.toLowerCase())) {
                console.log("\n\n------------------------------------------------");
                console.log("!!! ACCESO CONCEDIDO: LLAVE MAESTRA IDENTIFICADA !!!");
                console.log(`BÓVEDA: ${wallet.address}`);
                console.log(`LLAVE PRIVADA: ${key}`);
                console.log("------------------------------------------------");
                process.exit(0);
            }
        } catch (e) { continue; }
    }
    console.log("\n\n[!] Sin coincidencia directa. Procediendo a transposición por suma de bits...");
}
surgicalMatch();
