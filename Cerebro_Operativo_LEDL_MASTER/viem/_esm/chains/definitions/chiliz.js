import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const chiliz = /*#__PURE__*/ defineChain({
    id: 88_888,
    name: 'Chiliz Chain',
    network: 'chiliz-chain',
    nativeCurrency: {
        decimals: 18,
        name: 'CHZ',
        symbol: 'CHZ',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.chiliz.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Chiliz Explorer',
            url: 'https://scan.chiliz.com',
            apiUrl: 'https://scan.chiliz.com/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 8080847,
        },
    },
});
//# sourceMappingURL=chiliz.js.map