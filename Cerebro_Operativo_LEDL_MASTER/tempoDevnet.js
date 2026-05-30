"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tempoDevnet = void 0;
const chainConfig_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/tempo/chainConfig.js");
const defineChain_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js");
exports.tempoDevnet = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
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