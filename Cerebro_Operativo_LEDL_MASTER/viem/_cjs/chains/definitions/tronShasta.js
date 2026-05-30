"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tronShasta = void 0;
const defineChain_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js");
exports.tronShasta = (0, defineChain_js_1.defineChain)({
    id: 2494104990,
    name: 'Tron Shasta',
    nativeCurrency: { name: 'TRON', symbol: 'TRX', decimals: 6 },
    rpcUrls: {
        default: {
            http: ['https://api.shasta.trongrid.io/jsonrpc'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Tronscan',
            url: 'https://shasta.tronscan.org',
        },
    },
    testnet: true,
});
//# sourceMappingURL=tronShasta.js.map