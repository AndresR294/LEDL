import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const mezo = /*#__PURE__*/ defineChain({
    id: 31_612,
    name: 'Mezo',
    nativeCurrency: {
        decimals: 18,
        name: 'Bitcoin',
        symbol: 'BTC',
    },
    rpcUrls: {
        default: { http: ['https://rpc.mezo.org'] },
    },
    blockExplorers: {
        default: {
            name: 'Mezo Explorer',
            url: 'https://explorer.mezo.org',
        },
    },
});
//# sourceMappingURL=mezo.js.map