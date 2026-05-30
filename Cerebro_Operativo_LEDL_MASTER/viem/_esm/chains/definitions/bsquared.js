import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const bsquared = /*#__PURE__*/ defineChain({
    id: 223,
    name: 'B2',
    nativeCurrency: {
        name: 'Bitcoin',
        symbol: 'BTC',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.bsquared.network'],
        },
    },
    blockExplorers: {
        default: {
            name: 'blockscout',
            url: 'https://explorer.bsquared.network',
        },
    },
});
//# sourceMappingURL=bsquared.js.map