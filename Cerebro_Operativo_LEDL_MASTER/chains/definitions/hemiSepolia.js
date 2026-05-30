"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hemiSepolia = void 0;
const defineChain_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js");
exports.hemiSepolia = (0, defineChain_js_1.defineChain)({
    id: 743111,
    name: 'Hemi Sepolia',
    network: 'Hemi Sepolia',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://testnet.rpc.hemi.network/rpc'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Hemi Sepolia explorer',
            url: 'https://testnet.explorer.hemi.xyz',
        },
    },
    testnet: true,
});
//# sourceMappingURL=hemiSepolia.js.map