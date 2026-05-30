"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.karura = void 0;
const defineChain_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js");
exports.karura = (0, defineChain_js_1.defineChain)({
    id: 686,
    name: 'Karura',
    network: 'karura',
    nativeCurrency: {
        name: 'Karura',
        symbol: 'KAR',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://eth-rpc-karura.aca-api.network'],
            webSocket: ['wss://eth-rpc-karura.aca-api.network'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Karura Blockscout',
            url: 'https://blockscout.karura.network',
            apiUrl: 'https://blockscout.karura.network/api',
        },
    },
    testnet: false,
});
//# sourceMappingURL=karura.js.map