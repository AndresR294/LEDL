import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const eteria = /*#__PURE__*/ defineChain({
    id: 140,
    name: 'Eteria',
    nativeCurrency: { name: 'Eteria', symbol: 'ERA', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://mainnet.eteria.io/v1'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Eteria Explorer',
            url: 'https://explorer.eteria.io',
            apiUrl: 'https://explorer.eteria.io/api',
        },
    },
});
//# sourceMappingURL=eteria.js.map