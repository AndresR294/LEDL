const { ethers } = require("ethers");

// Configuración de Red Base Soberana
const provider = new ethers.JsonRpcProvider("https://mainnet.base.org");
const privateKey = "16d9918c9182f33137b062a9b8de88cfae3e34b38d74fb0fb073e562e683519b";
const wallet = new ethers.Wallet(privateKey, provider);

async function checkBalance() {
    console.log("------------------------------------------------");
    console.log("DIRECTOR: J ANDRES RESENDEZ R.");
    console.log("SISTEMA: EnsDeLiz Preventiva");
    console.log("WALLET: " + wallet.address);
    
    try {
        const balance = await provider.getBalance(wallet.address);
        console.log("BALANCE ACTUAL: " + ethers.formatEther(balance) + " ETH");
        console.log("ESTADO: CONECTADO A BASE MAINNET [OK]");
    } catch (error) {
        console.log("ERROR DE CONEXIÓN: Verifica tu internet.");
    }
    console.log("------------------------------------------------");
}

checkBalance();
