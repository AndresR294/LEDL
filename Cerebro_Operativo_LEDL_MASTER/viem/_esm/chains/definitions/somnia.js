import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const somnia = /*#__PURE__*/ defineChain({
    id: 5031,
    name: 'Somnia',
    nativeCurrency: { name: 'Somnia', symbol: 'SOMI', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://api.infra.mainnet.somnia.network'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Somnia Explorer',
            url: 'https://explorer.somnia.network',
            apiUrl: 'https://explorer.somnia.network/api',
        },
    },
    testnet: false,
});
//# sourceMappingURL=somnia.js.map