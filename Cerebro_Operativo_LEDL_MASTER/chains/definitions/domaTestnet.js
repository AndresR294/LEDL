"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.domaTestnet = void 0;
const defineChain_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js");
exports.domaTestnet = (0, defineChain_js_1.defineChain)({
    id: 97_476,
    name: 'Doma Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: { http: ['https://rpc-testnet.doma.xyz'] },
    },
    blockExplorers: {
        default: {
            name: 'Doma Testnet Explorer',
            url: 'https://explorer-testnet.doma.xyz',
        },
    },
    testnet: true,
});
//# sourceMappingURL=domaTestnet.js.map