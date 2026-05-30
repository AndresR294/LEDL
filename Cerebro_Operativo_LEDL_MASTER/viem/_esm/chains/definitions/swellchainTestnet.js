import { chainConfig } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/op-stack/chainConfig.js';
import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const swellchainTestnet = /*#__PURE__*/ defineChain({
    ...chainConfig,
    id: 1924,
    name: 'Swellchain Testnet',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://swell-testnet.alt.technology'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Swellchain Testnet Explorer',
            url: 'https://swell-testnet-explorer.alt.technology',
            apiUrl: 'https://swell-testnet-explorer.alt.technology/api',
        },
    },
    contracts: {
        ...chainConfig.contracts,
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 1,
        },
    },
    testnet: true,
});
//# sourceMappingURL=swellchainTestnet.js.map