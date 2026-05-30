const { ethers } = require("ethers");
const provider = new ethers.JsonRpcProvider("https://mainnet.base.org");

async function investigate() {
    const target = "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e";
    console.log("--- INVESTIGACIÓN DE OBJETIVO: EnsDeLiz ---");
    
    // 1. Ver Balance real
    const balance = await provider.getBalance(target);
    console.log("DIRECCIÓN: " + target);
    console.log("BALANCE ETH: " + ethers.formatEther(balance));

    // 2. ¿Es una persona o un contrato?
    const code = await provider.getCode(target);
    if (code === "0x") {
        console.log("TIPO: Billetera Personal (EOA) - Necesitas la Private Key correcta.");
    } else {
        console.log("TIPO: Smart Contract - No se puede loguear con llave, se requiere interacción.");
    }

    // 3. Ver transacciones recientes (Simplificado)
    const txCount = await provider.getTransactionCount(target);
    console.log("TOTAL TRANSACCIONES ENVIADAS: " + txCount);
    console.log("-------------------------------------------");
}

investigate();
