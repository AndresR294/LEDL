import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const metadium = /*#__PURE__*/ defineChain({
    id: 11,
    name: 'Metadium Network',
    nativeCurrency: {
        decimals: 18,
        name: 'META',
        symbol: 'META',
    },
    rpcUrls: {
        default: { http: ['https://api.metadium.com/prod'] },
    },
    blockExplorers: {
        default: {
            name: 'Metadium Explorer',
            url: 'https://explorer.metadium.com',
        },
    },
    testnet: false,
});
//# sourceMappingURL=metadium.js.map