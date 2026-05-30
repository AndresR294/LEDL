import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const loadAlphanet = /*#__PURE__*/ defineChain({
    id: 9496,
    name: 'Load Alphanet',
    nativeCurrency: { name: 'Testnet LOAD', symbol: 'tLOAD', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://alphanet.load.network'] },
    },
    blockExplorers: {
        default: {
            name: 'Load Alphanet Explorer',
            url: 'https://explorer.load.network',
        },
    },
    testnet: true,
});
//# sourceMappingURL=loadAlphanet.js.map