const { EAS, SchemaEncoder } = require("@ethereum-attestation-service/eas-sdk");
const { ethers } = require("ethers");

// Red: Base Mainnet (Ecosistema LEDL)
const EAS_ADDRESS = "0x4200000000000000000000000000000000000021";

async function firmar() {
    try {
        console.log(">>> [EnsDeLiz] Creando Esquema Institucional...");
        
        // Esquema para LAS ENSEÑANZAS DE LIZ
        // Definimos el saldo como el activo principal a reflejar
        const schemaEncoder = new SchemaEncoder("uint256 saldo, string simbolo, string organizacion");
        const encodedData = schemaEncoder.encodeData([
            { name: "saldo", value: "1000000000000000000", type: "uint256" }, // Ejemplo 1.0 (Ajustar al real)
            { name: "simbolo", value: "LEDL", type: "string" },
            { name: "organizacion", value: "LAS ENSEÑANZAS DE LIZ(LEDL) ACSFDL", type: "string" }
        ]);

        console.log("✅ Datos estructurados para Clear Signing listos.");
        console.log("📍 Organización: LAS ENSEÑANZAS DE LIZ");
        console.log(">>> [ARES-Kal] Esperando inyección de llave para reflejo...");
        
    } catch (err) {
        console.error("❌ Error en la lógica de firma:", err.message);
    }
}
firmar();
