import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const gobi = /*#__PURE__*/ defineChain({
    id: 1_663,
    name: 'Horizen Gobi Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Test ZEN',
        symbol: 'tZEN',
    },
    rpcUrls: {
        default: { http: ['https://gobi-testnet.horizenlabs.io/ethv1'] },
    },
    blockExplorers: {
        default: {
            name: 'Gobi Explorer',
            url: 'https://gobi-explorer.horizen.io',
        },
    },
    contracts: {},
    testnet: true,
});
//# sourceMappingURL=gobi.js.map