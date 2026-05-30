"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tempoLocalnet = void 0;
const chainConfig_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/tempo/chainConfig.js");
const defineChain_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js");
exports.tempoLocalnet = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 1337,
    name: 'Tempo',
    hardfork: 't3',
    nativeCurrency: {
        name: 'USD',
        symbol: 'USD',
        decimals: 6,
    },
    rpcUrls: {
        default: { http: ['http://localhost:8545'] },
    },
});
//# sourceMappingURL=tempoLocalnet.js.map