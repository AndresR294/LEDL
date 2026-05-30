import { chainConfig } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/op-stack/chainConfig.js';
import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const dchain = /*#__PURE__*/ defineChain({
    ...chainConfig,
    id: 2716446429837000,
    name: 'Dchain',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://dchain-2716446429837000-1.jsonrpc.sagarpc.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Dchain Explorer',
            url: 'https://dchain-2716446429837000-1.sagaexplorer.io',
            apiUrl: 'https://api-dchain-2716446429837000-1.sagaexplorer.io/api',
        },
    },
    contracts: {
        ...chainConfig.contracts,
    },
});
//# sourceMappingURL=dchain.js.map