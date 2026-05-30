import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const unique = /*#__PURE__*/ defineChain({
    id: 8880,
    name: 'Unique Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'UNQ',
        symbol: 'UNQ',
    },
    rpcUrls: {
        default: { http: ['https://rpc.unique.network'] },
    },
    blockExplorers: {
        default: {
            name: 'Unique Subscan',
            url: 'https://unique.subscan.io/',
        },
    },
});
//# sourceMappingURL=unique.js.map