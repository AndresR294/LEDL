"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.igra = void 0;
const defineChain_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js");
exports.igra = (0, defineChain_js_1.defineChain)({
    id: 38833,
    name: 'Igra Network',
    nativeCurrency: {
        decimals: 18,
        name: 'iKAS',
        symbol: 'iKAS',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.igralabs.com:8545'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Igra Explorer',
            url: 'https://explorer.igralabs.com',
        },
    },
    testnet: false,
});
//# sourceMappingURL=igra.js.map