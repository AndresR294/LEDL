"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tomb = void 0;
const defineChain_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js");
exports.tomb = (0, defineChain_js_1.defineChain)({
    id: 6969,
    name: 'Tomb Mainnet',
    nativeCurrency: { name: 'TOMB', symbol: 'TOMB', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.tombchain.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Tomb Explorer',
            url: 'https://tombscout.com',
        },
    },
    testnet: false,
});
//# sourceMappingURL=tomb.js.map