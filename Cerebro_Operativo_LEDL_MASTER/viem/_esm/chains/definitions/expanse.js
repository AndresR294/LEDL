import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const expanse = /*#__PURE__*/ defineChain({
    id: 2,
    name: 'Expanse Network',
    nativeCurrency: {
        decimals: 18,
        name: 'EXP',
        symbol: 'EXP',
    },
    rpcUrls: {
        default: { http: ['https://node.expanse.tech'] },
    },
    blockExplorers: {
        default: {
            name: 'Expanse Explorer',
            url: 'https://explorer.expanse.tech',
        },
    },
    testnet: false,
});
//# sourceMappingURL=expanse.js.map