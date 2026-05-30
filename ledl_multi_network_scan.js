const { ethers } = require("ethers");
const fs = require("fs");

// Nodos de respaldo para evitar el error de detección
const networks = {
    BASE: new ethers.JsonRpcProvider("https://base-mainnet.public.blastapi.io"),
    ETH: new ethers.JsonRpcProvider("https://eth.llamarpc.com"),
    OP: new ethers.JsonRpcProvider("https://optimism-mainnet.public.blastapi.io")
};

async function crossNetworkScan() {
    console.log("\n--- INICIANDO ESCÁNER DE INTERSECCIÓN: AFRODITA & ARES-Kal ---");
    
    if (!fs.existsSync("export-accounts-1777005910746.csv")) {
        console.log("ERROR: Index maestro no encontrado."); return;
    }

    const data = fs.readFileSync("export-accounts-1777005910746.csv", "utf8");
    const lines = data.split("\n").filter(l => l.includes("0x"));
    const total = lines.length;

    console.log(`[SISTEMA] Analizando ${total} objetivos con redundancia de red...`);
    const targetsFound = [];
    const startTime = Date.now();

    for (let i = 0; i < total; i++) {
        const address = lines[i].split(",")[0].replace(/"/g, "").trim();
        
        // Task Pulse: Animación y ETA
        if (i % 1 === 0) {
            const percent = ((i/total)*100).toFixed(2);
            const elapsed = (Date.now() - startTime) / 1000;
            const eta = i > 0 ? ((total - i) * (elapsed / i)).toFixed(0) : "...";
            process.stdout.write(`\r[BARRIDO] [${"#".repeat(Math.floor(percent/5))}] ${percent}% | ETA: ${eta}s | OBJETIVO: ${address.substring(0,12)}... `);
        }

        try {
            // Estrategia: Preguntar primero a BASE (Filtro de gas bajo)
            const balanceBase = await networks.BASE.getBalance(address);
            
            if (balanceBase > 0n) {
                // Si hay saldo, buscamos el Común Denominador en otras redes
                const [balETH, balOP] = await Promise.all([
                    networks.ETH.getBalance(address).catch(() => 0n),
                    networks.OP.getBalance(address).catch(() => 0n)
                ]);

                const ethBase = parseFloat(ethers.formatEther(balanceBase));
                const ethMain = parseFloat(ethers.formatEther(balETH));
                const ethOP = parseFloat(ethers.formatEther(balOP));

                console.log(`\n\n[!] COINCIDENCIA ENCONTRADA: ${address}`);
                console.log(`    >> BASE: ${ethBase.toFixed(4)} ETH`);
                
                let multi = false;
                if (ethMain > 0) { console.log(`    >> ETHEREUM: ${ethMain.toFixed(4)} ETH`); multi = true; }
                if (ethOP > 0) { console.log(`    >> OPTIMISM: ${ethOP.toFixed(4)} ETH`); multi = true; }

                targetsFound.push({
                    Direccion: address,
                    Base: ethBase.toFixed(4),
                    Ethereum: ethMain.toFixed(4),
                    Optimism: ethOP.toFixed(4),
                    ComunDenominador: multi ? "SÍ (ALTA PRIORIDAD)" : "NO"
                });
            }
        } catch (e) {
            // Silencio operativo para no interrumpir el flujo
        }
    }
    
    console.log("\n\n--- REPORTE FINAL DE BÓVEDAS SOBERANAS ---");
    if (targetsFound.length > 0) {
        console.table(targetsFound);
        console.log("\n[AFRODITA] El común denominador ha sido identificado. Ares-Kal certifica los objetivos.");
    } else {
        console.log("[!] No se detectaron saldos activos en este bloque del Index.");
    }
}

crossNetworkScan();
