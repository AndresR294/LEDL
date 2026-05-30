"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.polygonAmoy = void 0;
const defineChain_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js");
exports.polygonAmoy = (0, defineChain_js_1.defineChain)({
    id: 80_002,
    name: 'Polygon Amoy',
    nativeCurrency: { name: 'POL', symbol: 'POL', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc-amoy.polygon.technology'],
        },
    },
    blockExplorers: {
        default: {
            name: 'PolygonScan',
            url: 'https://amoy.polygonscan.com',
            apiUrl: 'https://api.etherscan.io/v2/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 3127388,
        },
    },
    testnet: true,
});
//# sourceMappingURL=polygonAmoy.js.map