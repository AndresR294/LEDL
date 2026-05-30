"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.surgeTestnet = void 0;
const defineChain_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js");
exports.surgeTestnet = (0, defineChain_js_1.defineChain)({
    id: 763_375,
    name: 'Surge Testnet',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://l2-rpc.hoodi.surge.wtf'],
            webSocket: ['wss://l2-ws.hoodi.surge.wtf'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Surge Testnet Blockscout',
            url: 'https://explorer.hoodi.surge.wtf',
        },
    },
    testnet: true,
});
//# sourceMappingURL=surgeTestnet.js.map