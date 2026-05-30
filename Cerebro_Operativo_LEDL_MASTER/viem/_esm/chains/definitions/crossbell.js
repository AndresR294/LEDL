import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const crossbell = /*#__PURE__*/ defineChain({
    id: 3_737,
    name: 'Crossbell',
    nativeCurrency: {
        decimals: 18,
        name: 'CSB',
        symbol: 'CSB',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.crossbell.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'CrossScan',
            url: 'https://scan.crossbell.io',
            apiUrl: 'https://scan.crossbell.io/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 38_246_031,
        },
    },
});
//# sourceMappingURL=crossbell.js.map