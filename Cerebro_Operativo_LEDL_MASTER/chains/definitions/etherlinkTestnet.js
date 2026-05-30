"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.etherlinkTestnet = void 0;
const defineChain_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js");
exports.etherlinkTestnet = (0, defineChain_js_1.defineChain)({
    id: 128123,
    name: 'Etherlink Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Tez',
        symbol: 'XTZ',
    },
    rpcUrls: {
        default: { http: ['https://node.ghostnet.etherlink.com'] },
    },
    blockExplorers: {
        default: {
            name: 'Etherlink Testnet',
            url: 'https://testnet.explorer.etherlink.com',
        },
    },
    testnet: true,
});
//# sourceMappingURL=etherlinkTestnet.js.map