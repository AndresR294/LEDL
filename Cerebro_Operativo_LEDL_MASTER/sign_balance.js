const { EAS, SchemaRegistry } = require("@ethereum-attestation-service/eas-sdk");
const { ethers } = require("ethers");

async function createAttestation() {
    console.log(">>> [EnsDeLiz] Generando estructura de atestación para saldo...");
    // Configuración para Base/Optimism (donde reside el saldo LEDL)
    const EASContractAddress = "0x4200000000000000000000000000000000000021"; 
    const eas = new EAS(EASContractAddress);
    
    // Aquí se integra con la llave maestra recuperada previamente
    console.log("✅ Sistema listo para recibir firma de dirección.");
}
createAttestation();
