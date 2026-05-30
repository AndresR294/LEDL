import { chainConfig } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/tempo/chainConfig.js';
import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const tempoDevnet = /*#__PURE__*/ defineChain({
    ...chainConfig,
    id: 31318,
    name: 'Tempo Devnet',
    hardfork: 't3',
    blockExplorers: {
        default: {
            name: 'Tempo Explorer',
            url: 'https://explore.devnet.tempo.xyz',
        },
    },
    nativeCurrency: {
        name: 'USD',
        symbol: 'USD',
        decimals: 6,
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.devnet.tempoxyz.dev'],
            webSocket: ['wss://rpc.devnet.tempoxyz.dev'],
        },
    },
    testnet: true,
});
//# sourceMappingURL=tempoDevnet.js.map