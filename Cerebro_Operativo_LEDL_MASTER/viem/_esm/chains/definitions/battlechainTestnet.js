import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
import { chainConfig } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/zksync/chainConfig.js';
export const battlechainTestnet = /*#__PURE__*/ defineChain({
    ...chainConfig,
    id: 627,
    name: 'BattleChain Testnet',
    network: 'battlechain-testnet',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://testnet.battlechain.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'BattleChain Explorer',
            url: 'https://explorer.testnet.battlechain.com',
            blockExplorerApi: 'https://block-explorer-api.testnet.battlechain.com/api',
        },
    },
    testnet: true,
});
//# sourceMappingURL=battlechainTestnet.js.map