const { ethers } = require("ethers");
const fs = require("fs");

// RPC de alta disponibilidad para evitar bloqueos
const provider = new ethers.JsonRpcProvider("https://mainnet.base.org");

async function deepScan() {
    console.log("--- INICIANDO BARRIDO SOBERANO: EnsDeLiz Preventiva ---");
    
    if (!fs.existsSync("export-accounts-1777005910746.csv")) {
        console.error("ERROR: El Index no existe. Ejecuta el paso 1 primero.");
        return;
    }

    const fileContent = fs.readFileSync("export-accounts-1777005910746.csv", "utf8");
    const lines = fileContent.split("\n").filter(l => l.trim() !== "").slice(1);

    console.log(`[SYSTEM] Index cargado: ${lines.length} registros detectados.`);
    
    for (let line of lines) {
        // Limpiar comillas y espacios
        const columns = line.replace(/"/g, "").split(",");
        const address = columns[0].trim();
        
        if (ethers.isAddress(address)) {
            try {
                const balance = await provider.getBalance(address);
                const ethBalance = parseFloat(ethers.formatEther(balance));

                // Si tiene balance, lo reportamos
                if (ethBalance > 0) {
                    console.log(`[*] ACTIVO: ${address} | BAL: ${ethBalance.toFixed(4)} ETH`);
                }

                // Verificación de coincidencia exacta con tu dirección de 4M
                if (address.toLowerCase() === "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e".toLowerCase()) {
                    console.log("------------------------------------------------");
                    console.log("!!! BÓVEDA LOCALIZADA EN LA BLOCKCHAIN !!!");
                    console.log(`DUEÑO: J ANDRES RESENDEZ R.`);
                    console.log(`BALANCE REAL: ${ethBalance} ETH`);
                    console.log("------------------------------------------------");
                }
            } catch (e) {
                // Continuar si hay error de red
            }
        }
    }
    console.log("--- BARRIDO COMPLETADO ---");
}

deepScan();
