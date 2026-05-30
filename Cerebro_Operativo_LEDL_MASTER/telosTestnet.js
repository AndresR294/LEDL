"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.telosTestnet = void 0;
const defineChain_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js");
exports.telosTestnet = (0, defineChain_js_1.defineChain)({
    id: 41,
    name: 'Telos',
    nativeCurrency: {
        decimals: 18,
        name: 'Telos',
        symbol: 'TLOS',
    },
    rpcUrls: {
        default: { http: ['https://rpc.testnet.telos.net'] },
    },
    blockExplorers: {
        default: {
            name: 'Teloscan (testnet)',
            url: 'https://testnet.teloscan.io/',
        },
    },
    testnet: true,
});
//# sourceMappingURL=telosTestnet.js.map