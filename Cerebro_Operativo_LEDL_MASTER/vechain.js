"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vechain = void 0;
const defineChain_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js");
exports.vechain = (0, defineChain_js_1.defineChain)({
    id: 100009,
    name: 'Vechain',
    nativeCurrency: { name: 'VeChain', symbol: 'VET', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://mainnet.vechain.org'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Vechain Explorer',
            url: 'https://explore.vechain.org',
        },
        vechainStats: {
            name: 'Vechain Stats',
            url: 'https://vechainstats.com',
        },
    },
});
//# sourceMappingURL=vechain.js.map