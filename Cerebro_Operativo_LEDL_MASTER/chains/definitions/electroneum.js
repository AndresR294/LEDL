"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.electroneum = void 0;
const defineChain_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js");
exports.electroneum = (0, defineChain_js_1.defineChain)({
    id: 52014,
    name: 'Electroneum Mainnet',
    nativeCurrency: {
        name: 'ETN',
        symbol: 'ETN',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.electroneum.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Electroneum Block Explorer',
            url: 'https://blockexplorer.electroneum.com',
        },
    },
    testnet: false,
});
//# sourceMappingURL=electroneum.js.map