const { SchemaEncoder, Offchain } = require("@ethereum-attestation-service/eas-sdk");
const { ethers } = require("ethers");
const fs = require("fs");

async function certificar() {
    // Configuración Base (Andres, recuerda que el PrivateKey se maneja en entorno seguro)
    const PK = "TU_LLAVE_PRIVADA_AQUÍ"; 
    const signer = new ethers.Wallet(PK);
    
    const schemaUID = "0x4fb6469601d9326e06b3a27299a9b19f07421ed45391ed21d96b9948ba45a6c3"; // Schema estándar
    const schemaEncoder = new SchemaEncoder("uint256 saldo, string simbolo, string organizacion");
    
    const encodedData = schemaEncoder.encodeData([
        { name: "saldo", value: "1000000000000000000", type: "uint256" },
        { name: "simbolo", value: "LEDL", type: "string" },
        { name: "organizacion", value: "LAS ENSEÑANZAS DE LIZ(LEDL) ACSFDL", type: "string" }
    ]);

    const offchain = new Offchain({
        address: "0x4200000000000000000000000000000000000021",
        version: "0.26",
        chainId: 8453, // Base
    }, 1);

    const attestation = await offchain.signOffchainAttestation({
        recipient: signer.address,
        expirationTime: 0,
        time: Math.floor(Date.now() / 1000),
        revocable: true,
        schema: schemaUID,
        refUID: "0x0000000000000000000000000000000000000000000000000000000000000000",
        data: encodedData,
    }, signer);

    // Guardar en archivo físico para envío
    const fileName = `atestacion_ledl_${Date.now()}.json`;
    fs.writeFileSync(fileName, JSON.stringify(attestation, null, 2));
    return fileName;
}

certificar().then(file => console.log(file)).catch(console.error);
