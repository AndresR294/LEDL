import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const yooldoVerse = /*#__PURE__*/ defineChain({
    id: 50_005,
    name: 'Yooldo Verse',
    nativeCurrency: { name: 'OAS', symbol: 'OAS', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.yooldo-verse.xyz'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Yooldo Verse Explorer',
            url: 'https://explorer.yooldo-verse.xyz',
        },
    },
});
//# sourceMappingURL=yooldoVerse.js.map