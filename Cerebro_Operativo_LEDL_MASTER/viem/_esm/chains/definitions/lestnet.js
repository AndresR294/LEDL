import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const lestnet = /*#__PURE__*/ defineChain({
    id: 21363,
    name: 'Lestnet',
    nativeCurrency: { name: 'Lestnet Ether', symbol: 'LETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://service.lestnet.org'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Lestnet Explorer',
            url: 'https://explore.lestnet.org',
        },
    },
    testnet: true,
});
//# sourceMappingURL=lestnet.js.map