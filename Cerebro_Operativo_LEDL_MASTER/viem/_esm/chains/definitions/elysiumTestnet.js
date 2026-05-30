import { chainConfig } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/op-stack/chainConfig.js';
import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const elysiumTestnet = /*#__PURE__*/ defineChain({
    ...chainConfig,
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