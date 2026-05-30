import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const bsquaredTestnet = /*#__PURE__*/ defineChain({
    id: 1123,
    name: 'B2 Testnet',
    nativeCurrency: {
        name: 'Bitcoin',
        symbol: 'BTC',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://testnet-rpc.bsquared.network'],
        },
    },
    blockExplorers: {
        default: {
            name: 'blockscout',
            url: 'https://testnet-explorer.bsquared.network',
        },
    },
    testnet: true,
});
//# sourceMappingURL=bsquaredTestnet.js.map