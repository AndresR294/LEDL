"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lightlinkPhoenix = void 0;
const defineChain_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js");
exports.lightlinkPhoenix = (0, defineChain_js_1.defineChain)({
    id: 1_890,
    name: 'LightLink Phoenix Mainnet',
    network: 'lightlink-phoenix',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: {
            http: ['https://replicator.phoenix.lightlink.io/rpc/v1'],
        },
    },
    blockExplorers: {
        default: {
            name: 'LightLink Phoenix Explorer',
            url: 'https://phoenix.lightlink.io',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 125_499_184,
        },
    },
    testnet: false,
});
//# sourceMappingURL=lightlinkPhoenix.js.map