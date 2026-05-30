import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const evmos = /*#__PURE__*/ defineChain({
    id: 9_001,
    name: 'Evmos',
    nativeCurrency: {
        decimals: 18,
        name: 'Evmos',
        symbol: 'EVMOS',
    },
    rpcUrls: {
        default: { http: ['https://eth.bd.evmos.org:8545'] },
    },
    blockExplorers: {
        default: {
            name: 'Evmos Block Explorer',
            url: 'https://escan.live',
        },
    },
});
//# sourceMappingURL=evmos.js.map