"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arc = void 0;
const defineChain_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js");
exports.arc = (0, defineChain_js_1.defineChain)({
    id: 5042,
    name: 'Arc',
    nativeCurrency: {
        name: 'USDC',
        symbol: 'USDC',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: [],
        },
    },
});
//# sourceMappingURL=arc.js.map