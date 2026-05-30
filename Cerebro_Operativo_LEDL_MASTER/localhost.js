"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localhost = void 0;
const defineChain_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js");
exports.localhost = (0, defineChain_js_1.defineChain)({
    id: 1_337,
    name: 'Localhost',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: { http: ['http://127.0.0.1:8545'] },
    },
});
//# sourceMappingURL=localhost.js.map