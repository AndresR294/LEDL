"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taraxa = void 0;
const defineChain_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js");
exports.taraxa = (0, defineChain_js_1.defineChain)({
    id: 841,
    name: 'Taraxa Mainnet',
    nativeCurrency: { name: 'Tara', symbol: 'TARA', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.mainnet.taraxa.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Taraxa Explorer',
            url: 'https://explorer.mainnet.taraxa.io',
        },
    },
});
//# sourceMappingURL=taraxa.js.map