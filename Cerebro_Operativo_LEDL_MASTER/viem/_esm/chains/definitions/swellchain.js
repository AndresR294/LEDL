import { chainConfig } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/op-stack/chainConfig.js';
import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const swellchain = /*#__PURE__*/ defineChain({
    ...chainConfig,
    id: 1923,
    name: 'Swellchain',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://swell-mainnet.alt.technology'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Swell Explorer',
            url: 'https://explorer.swellnetwork.io',
            apiUrl: 'https://explorer.swellnetwork.io/api',
        },
    },
    contracts: {
        ...chainConfig.contracts,
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 1,
        },
    },
});
//# sourceMappingURL=swellchain.js.map