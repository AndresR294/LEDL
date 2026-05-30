"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qTestnet = void 0;
const defineChain_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js");
exports.qTestnet = (0, defineChain_js_1.defineChain)({
    id: 35443,
    name: 'Q Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Q',
        symbol: 'Q',
    },
    rpcUrls: {
        default: { http: ['https://rpc.qtestnet.org'] },
    },
    blockExplorers: {
        default: {
            name: 'Q Testnet Explorer',
            url: 'https://explorer.qtestnet.org',
            apiUrl: 'https://explorer.qtestnet.org/api',
        },
    },
    testnet: true,
});
//# sourceMappingURL=qTestnet.js.map