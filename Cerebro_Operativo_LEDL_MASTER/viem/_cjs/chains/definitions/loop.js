"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loop = void 0;
const defineChain_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js");
exports.loop = (0, defineChain_js_1.defineChain)({
    id: 15551,
    name: 'LoopNetwork Mainnet',
    nativeCurrency: {
        name: 'LOOP',
        symbol: 'LOOP',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://api.mainnetloop.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'LoopNetwork Blockchain Explorer',
            url: 'https://explorer.mainnetloop.com/',
        },
    },
    testnet: false,
});
//# sourceMappingURL=loop.js.map