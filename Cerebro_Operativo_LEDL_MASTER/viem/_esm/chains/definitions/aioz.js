import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const aioz = /*#__PURE__*/ defineChain({
    id: 168,
    name: 'AIOZ Network',
    nativeCurrency: {
        decimals: 18,
        name: 'AIOZ',
        symbol: 'AIOZ',
    },
    rpcUrls: {
        default: {
            http: ['https://eth-dataseed.aioz.network'],
        },
    },
    blockExplorers: {
        default: {
            name: 'AIOZ Explorer',
            url: 'https://explorer.aioz.network',
        },
    },
    testnet: false,
});
//# sourceMappingURL=aioz.js.map