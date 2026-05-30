/**
 * Autor: J. Andres Resendez R.
 * Módulo: EnsDeLiz Preventiva - Allbridge Core Integration
 * Propósito: Intercambio Cross-chain Soberano
 */

const { AllbridgeCoreSdk, ChainSymbol, Messenger, nodeRpcUrlsDefault } = require("@allbridge/bridge-core-sdk");
require("dotenv").config();

async function ejecutarPuente() {
    console.log("--- [ INICIALIZANDO SDK ALLBRIDGE CORE ] ---");
    
    // 1. Instancia con RPCs Soberanos (Optimizado para no saturar RAM)
    const sdk = new AllbridgeCoreSdk({
        ...nodeRpcUrlsDefault,
        BASE: process.env.WEB3_PROVIDER_URL || "https://mainnet.base.org",
        TRX: "https://api.trongrid.io"
    });

    try {
        const chains = await sdk.chainDetailsMap();
        
        // Configuración de Tokens (Base ETH -> Tron USDT)
        const sourceChain = chains[ChainSymbol.BASE];
        const sourceToken = sourceChain.tokens.find(t => t.symbol === "ETH");
        
        const destChain = chains[ChainSymbol.TRX];
        const destToken = destChain.tokens.find(t => t.symbol === "USDT");

        console.log(`[i] Sincronizando: ${sourceToken.symbol} (BASE) >> ${destToken.symbol} (TRON)`);

        // 2. Cálculo de comisiones y tiempo (Evita Signal 9 al ser asíncrono puro)
        const amountToSend = "0.01";
        const gasOptions = await sdk.getGasFeeOptions(sourceToken, destToken, Messenger.ALLBRIDGE);
        const timeMs = await sdk.getAverageTransferTime(sourceToken, destToken, Messenger.ALLBRIDGE);

        console.log("---------------------------------------------------------------");
        console.log(` >> TARIFA ESTIMADA: ${gasOptions.native.float} ETH`);
        console.log(` >> TIEMPO ESTIMADO: ${timeMs / 60000} minutos`);
        console.log("---------------------------------------------------------------");

        // 3. Generador de Transacción Raw (Listo para firma manual)
        const rawTx = await sdk.bridge.rawTxBuilder.send({
            amount: amountToSend,
            fromAccountAddress: process.env.FROM_ADDRESS,
            toAccountAddress: process.env.TO_ADDRESS,
            sourceToken: sourceToken,
            destinationToken: destToken,
            messenger: Messenger.ALLBRIDGE,
        });

        console.log("[OK] Payload de transacción generado exitosamente.");
        process.exit(0);
    } catch (error) {
        console.error("[!] Error en el núcleo de Allbridge:", error.message);
        process.exit(1);
    }
}

ejecutarPuente();
