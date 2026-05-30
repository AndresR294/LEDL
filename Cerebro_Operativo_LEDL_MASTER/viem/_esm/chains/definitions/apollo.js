import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const apollo = /*#__PURE__*/ defineChain({
    id: 62606,
    name: 'Apollo',
    nativeCurrency: {
        decimals: 18,
        name: 'Apollo',
        symbol: 'APOLLO',
    },
    rpcUrls: {
        default: {
            http: ['https://mainnet-rpc.apolloscan.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Apollo Explorer',
            url: 'https://apolloscan.io',
        },
    },
});
//# sourceMappingURL=apollo.js.map