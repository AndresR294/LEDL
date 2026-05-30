"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hpp = void 0;
const defineChain_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js");
exports.hpp = (0, defineChain_js_1.defineChain)({
    id: 190415,
    name: 'HPP Mainnet',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://mainnet.hpp.io'],
            webSocket: ['wss://mainnet.hpp.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'HPP Mainnet Explorer',
            url: 'https://explorer.hpp.io',
        },
    },
    testnet: false,
});
//# sourceMappingURL=hpp.js.map