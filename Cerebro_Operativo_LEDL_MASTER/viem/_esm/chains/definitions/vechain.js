import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const vechain = /*#__PURE__*/ defineChain({
    id: 100009,
    name: 'Vechain',
    nativeCurrency: { name: 'VeChain', symbol: 'VET', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://mainnet.vechain.org'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Vechain Explorer',
            url: 'https://explore.vechain.org',
        },
        vechainStats: {
            name: 'Vechain Stats',
            url: 'https://vechainstats.com',
        },
    },
});
//# sourceMappingURL=vechain.js.map