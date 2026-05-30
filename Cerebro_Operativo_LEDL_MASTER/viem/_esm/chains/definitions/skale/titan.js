import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../utils/chain/defineChain.js';
export const skaleTitan = /*#__PURE__*/ defineChain({
    id: 1_350_216_234,
    name: 'SKALE Titan Hub',
    nativeCurrency: { name: 'sFUEL', symbol: 'sFUEL', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://mainnet.skalenodes.com/v1/parallel-stormy-spica'],
            webSocket: ['wss://mainnet.skalenodes.com/v1/ws/parallel-stormy-spica'],
        },
    },
    blockExplorers: {
        default: {
            name: 'SKALE Explorer',
            url: 'https://parallel-stormy-spica.explorer.mainnet.skalenodes.com',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 2_076_458,
        },
    },
});
//# sourceMappingURL=titan.js.map