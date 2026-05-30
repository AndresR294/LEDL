import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const rivalz = /*#__PURE__*/ defineChain({
    id: 753,
    name: 'Rivalz',
    nativeCurrency: { decimals: 18, name: 'Ether', symbol: 'ETH' },
    rpcUrls: {
        default: {
            http: ['https://rivalz.calderachain.xyz/http'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Rivalz Caldera Explorer',
            url: 'https://rivalz.calderaexplorer.xyz',
        },
    },
    testnet: false,
});
//# sourceMappingURL=rivalz.js.map