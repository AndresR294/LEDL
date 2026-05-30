import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const lens = /*#__PURE__*/ defineChain({
    id: 232,
    name: 'Lens',
    nativeCurrency: { name: 'GHO', symbol: 'GHO', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.lens.xyz'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Lens Block Explorer',
            url: 'https://explorer.lens.xyz',
            apiUrl: 'https://explorer.lens.xyz/api',
        },
    },
});
//# sourceMappingURL=lens.js.map