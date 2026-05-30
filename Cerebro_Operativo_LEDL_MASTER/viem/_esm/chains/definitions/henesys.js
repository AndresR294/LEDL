import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const henesys = /*#__PURE__*/ defineChain({
    id: 68414,
    name: 'Henesys',
    nativeCurrency: { name: 'NEXPACE', symbol: 'NXPC', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://henesys-rpc.msu.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Avalanche Explorer',
            url: 'https://subnets.avax.network/henesys',
        },
    },
});
//# sourceMappingURL=henesys.js.map