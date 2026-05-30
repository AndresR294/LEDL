"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tiktrixTestnet = void 0;
const defineChain_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js");
exports.tiktrixTestnet = (0, defineChain_js_1.defineChain)({
    id: 62092,
    name: 'TikTrix Testnet',
    nativeCurrency: {
        name: 'tTTX',
        symbol: 'tTTX',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://tiktrix-rpc.xyz'],
        },
    },
    blockExplorers: {
        default: {
            name: 'TikTrix Testnet Explorer',
            url: 'https://tiktrix.xyz',
        },
    },
    testnet: true,
});
//# sourceMappingURL=tiktrixTestnet.js.map