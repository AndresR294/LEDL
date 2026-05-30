"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elysiumTestnet = void 0;
const chainConfig_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/op-stack/chainConfig.js");
const defineChain_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js");
exports.elysiumTestnet = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 1338,
    name: 'Elysium Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'LAVA',
        symbol: 'LAVA',
    },
    rpcUrls: {
        default: {
            http: ['https://elysium-test-rpc.vulcanforged.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Elysium testnet explorer',
            url: 'https://elysium-explorer.vulcanforged.com',
        },
    },
    testnet: true,
});
//# sourceMappingURL=elysiumTestnet.js.map