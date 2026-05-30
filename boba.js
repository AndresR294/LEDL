"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boba = void 0;
const defineChain_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js");
exports.boba = (0, defineChain_js_1.defineChain)({
    id: 288,
    name: 'Boba Network',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: { http: ['https://mainnet.boba.network'] },
    },
    blockExplorers: {
        default: {
            name: 'BOBAScan',
            url: 'https://bobascan.com',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 446859,
        },
    },
});
//# sourceMappingURL=boba.js.map