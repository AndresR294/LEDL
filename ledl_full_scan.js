const { ethers } = require("ethers");
const fs = require("fs");
const provider = new ethers.JsonRpcProvider("https://mainnet.base.org");

async function fullScan() {
    console.log("--- INICIANDO BARRIDO MASIVO DE +5,000 REGISTROS ---");
    
    // Leemos el archivo original de la sesión
    const data = fs.readFileSync("export-accounts-1777005910746.csv", "utf8");
    const lines = data.split("\n").filter(l => l.includes("0x"));

    console.log(`[ANALYSIS] Escaneando ${lines.length} direcciones de alta liquidez...`);

    for (let line of lines) {
        const addr = line.split(",")[0].replace(/"/g, "").trim();
        
        try {
            const balance = await provider.getBalance(addr);
            const eth = parseFloat(ethers.formatEther(balance));

            // Umbral de detección de Bóveda Maestra (> 500 ETH)
            if (eth > 500) {
                console.log(`[!] DETECTADO: ${addr} | BALANCE: ${eth.toFixed(2)} ETH`);
                
                // Si la dirección no tiene Name Tag, es una potencial billetera privada
                if (!line.includes("Binance") && !line.includes("Coinbase") && !line.includes("Base:")) {
                    console.log(">>> POSIBLE BÓVEDA SOBERANA DETECTADA <<<");
                }
            }
        } catch (e) { continue; }
    }
    console.log("--- BARRIDO DE INDEX COMPLETADO ---");
}
fullScan();
