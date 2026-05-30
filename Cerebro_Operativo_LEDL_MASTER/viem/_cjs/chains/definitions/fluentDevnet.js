"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fluentDevnet = void 0;
const defineChain_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js");
exports.fluentDevnet = (0, defineChain_js_1.defineChain)({
    id: 20_993,
    name: 'Fluent Devnet',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.devnet.fluent.xyz'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Fluent Devnet Explorer',
            url: 'https://devnet.fluentscan.xyz',
        },
    },
    testnet: true,
});
//# sourceMappingURL=fluentDevnet.js.map