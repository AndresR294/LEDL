const { createPublicClient, http } = require('viem');
const { base } = require('viem/chains');

const client = createPublicClient({ chain: base, transport: http('https://mainnet.base.org') });

async function check() {
    const receipt = await client.getTransactionReceipt({ hash: '0x8b09f73e410cd8bf979adb6de2ada9b7e751992c2ccdcc9474e626dbc9c82eaf' });
    const currentBlock = await client.getBlockNumber();
    const confirmations = currentBlock - receipt.blockNumber;
    
    console.log("💎 ESTADO DEL ACTIVO:");
    console.log("📍 Bloque de Inclusión: " + receipt.blockNumber);
    console.log("⛓️  Confirmaciones Actuales: " + confirmations);
    
    if (confirmations > 12) {
        console.log("✅ ESTADO: El dinero YA ESTÁ en los nodos de Binance.");
        console.log("⏳ NOTA: Binance está procesando el balance interno (Wait indexing).");
    } else {
        console.log("⚠️  ESTADO: En proceso de minado profundo (" + confirmations + "/12).");
    }
}
check().catch(console.error);
