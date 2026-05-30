import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const mchVerse = /*#__PURE__*/ defineChain({
    id: 29548,
    name: 'MCH Verse',
    nativeCurrency: { name: 'Oasys', symbol: 'OAS', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.oasys.mycryptoheroes.net'],
        },
    },
    blockExplorers: {
        default: {
            name: 'MCH Verse Explorer',
            url: 'https://explorer.oasys.mycryptoheroes.net',
            apiUrl: 'https://explorer.oasys.mycryptoheroes.net/api',
        },
    },
    testnet: false,
});
//# sourceMappingURL=mchVerse.js.map