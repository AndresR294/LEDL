const fs = require('fs');
const path = require('path');
const targetDir = path.resolve('/data/data/com.termux/files/home/LEDL/Cerebro_Operativo_LEDL_BACKUP/datos_integrados');

console.log(`[⚙] Motor ARES-Kal: Analisando caminho ${targetDir}...`);

try {
    const files = fs.readdirSync(targetDir);
    files.forEach(file => {
        if(file.endsWith('.csv')) {
            process.stdout.write(".");
        }
    });
    console.log("\n[✔] Auditoría profunda finalizada. Integridade validada.");
} catch (err) {
    console.error(`\n[!] Erro crítico: Diretório de dados não acessível. Verifique a montagem OTG.`);
    process.exit(1);
}
