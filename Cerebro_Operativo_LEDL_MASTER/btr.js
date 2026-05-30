"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.btr = void 0;
const defineChain_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js");
exports.btr = (0, defineChain_js_1.defineChain)({
    id: 200901,
    name: 'Bitlayer',
    nativeCurrency: {
        name: 'Bitcoin',
        symbol: 'BTC',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.bitlayer.org', 'https://rpc.bitlayer-rpc.com'],
            webSocket: ['wss://ws.bitlayer.org', 'wss://ws.bitlayer-rpc.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Bitlayer(BTR) Scan',
            url: 'https://www.btrscan.com',
        },
    },
});
//# sourceMappingURL=btr.js.map