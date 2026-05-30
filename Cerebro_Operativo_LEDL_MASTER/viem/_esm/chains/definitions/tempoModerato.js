import { chainConfig } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/tempo/chainConfig.js';
import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const tempoModerato = /*#__PURE__*/ defineChain({
    ...chainConfig,
    id: 42431,
    blockExplorers: {
        default: {
            name: 'Tempo Explorer',
            url: 'https://explore.testnet.tempo.xyz',
        },
    },
    name: 'Tempo Testnet (Moderato)',
    nativeCurrency: {
        name: 'USD',
        symbol: 'USD',
        decimals: 6,
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.moderato.tempo.xyz'],
            webSocket: ['wss://rpc.moderato.tempo.xyz'],
        },
    },
    testnet: true,
});
//# sourceMappingURL=tempoModerato.js.map