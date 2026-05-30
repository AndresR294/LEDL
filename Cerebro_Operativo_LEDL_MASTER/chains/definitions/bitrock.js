"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bitrock = void 0;
const defineChain_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js");
exports.bitrock = (0, defineChain_js_1.defineChain)({
    id: 7171,
    name: 'Bitrock Mainnet',
    nativeCurrency: { name: 'BROCK', symbol: 'BROCK', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://brockrpc.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Bitrock Explorer',
            url: 'https://explorer.bit-rock.io',
        },
    },
    testnet: false,
});
//# sourceMappingURL=bitrock.js.map