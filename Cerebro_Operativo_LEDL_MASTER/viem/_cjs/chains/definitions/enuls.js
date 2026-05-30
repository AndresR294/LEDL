"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enuls = void 0;
const defineChain_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js");
exports.enuls = (0, defineChain_js_1.defineChain)({
    id: 119,
    name: 'ENULS Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'NULS',
        symbol: 'NULS',
    },
    rpcUrls: {
        default: { http: ['https://evmapi2.nuls.io'] },
    },
    blockExplorers: {
        default: {
            name: 'ENULS Explorer',
            url: 'https://evmscan.nuls.io',
        },
    },
    testnet: false,
});
//# sourceMappingURL=enuls.js.map