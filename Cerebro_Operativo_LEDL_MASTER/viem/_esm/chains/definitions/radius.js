import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const radius = /*#__PURE__*/ defineChain({
    id: 723_487,
    name: 'Radius Network',
    nativeCurrency: { name: 'Radius USD', symbol: 'RUSD', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.radiustech.xyz'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Radius Network Explorer',
            url: 'https://network.radiustech.xyz',
        },
    },
    testnet: false,
});
//# sourceMappingURL=radius.js.map