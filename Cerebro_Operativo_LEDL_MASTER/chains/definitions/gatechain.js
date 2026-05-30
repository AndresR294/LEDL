"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gatechain = void 0;
const defineChain_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js");
exports.gatechain = (0, defineChain_js_1.defineChain)({
    id: 86,
    name: 'GateChain Mainnet',
    nativeCurrency: { name: 'GateChainToken', symbol: 'GT', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://evm.nodeinfo.cc'],
            webSocket: ['wss://evm-ws.gatenode.cc'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Gate Scan',
            url: 'https://www.gatescan.org',
            apiUrl: 'https://gatescan.org/api',
        },
    },
    testnet: false,
});
//# sourceMappingURL=gatechain.js.map