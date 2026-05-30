"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sketchpad = void 0;
const defineChain_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js");
exports.sketchpad = (0, defineChain_js_1.defineChain)({
    id: 984123,
    name: 'Forma Sketchpad',
    network: 'sketchpad',
    nativeCurrency: {
        symbol: 'TIA',
        name: 'TIA',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.sketchpad-1.forma.art'],
            webSocket: ['wss://ws.sketchpad-1.forma.art'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Sketchpad Explorer',
            url: 'https://explorer.sketchpad-1.forma.art',
        },
    },
    testnet: true,
});
//# sourceMappingURL=sketchpad.js.map