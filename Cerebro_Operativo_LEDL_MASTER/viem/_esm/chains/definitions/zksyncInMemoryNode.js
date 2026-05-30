import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
import { chainConfig } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/zksync/chainConfig.js';
export const zksyncInMemoryNode = /*#__PURE__*/ defineChain({
    ...chainConfig,
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