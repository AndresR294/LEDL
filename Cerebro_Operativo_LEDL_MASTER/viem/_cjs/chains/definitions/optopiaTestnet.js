"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optopiaTestnet = void 0;
const defineChain_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js");
exports.optopiaTestnet = (0, defineChain_js_1.defineChain)({
    id: 62049,
    name: 'Optopia Testnet',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://rpc-testnet.optopia.ai'] },
    },
    blockExplorers: {
        default: {
            name: 'Optopia Explorer',
            url: 'https://scan-testnet.optopia.ai',
        },
    },
    testnet: true,
});
//# sourceMappingURL=optopiaTestnet.js.map