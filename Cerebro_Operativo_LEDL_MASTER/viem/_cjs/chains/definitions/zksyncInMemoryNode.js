"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zksyncInMemoryNode = void 0;
const defineChain_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js");
const chainConfig_js_1 = require("/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/zksync/chainConfig.js");
exports.zksyncInMemoryNode = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 260,
    name: 'ZKsync InMemory Node',
    network: 'zksync-in-memory-node',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['http://localhost:8011'],
        },
    },
    testnet: true,
});
//# sourceMappingURL=zksyncInMemoryNode.js.map