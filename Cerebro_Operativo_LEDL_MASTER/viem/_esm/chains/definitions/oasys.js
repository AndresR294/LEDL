import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const oasys = /*#__PURE__*/ defineChain({
    id: 248,
    name: 'Oasys',
    nativeCurrency: { name: 'Oasys', symbol: 'OAS', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.mainnet.oasys.games'],
        },
    },
    blockExplorers: {
        default: {
            name: 'OasysScan',
            url: 'https://scan.oasys.games',
            apiUrl: 'https://scan.oasys.games/api',
        },
    },
});
//# sourceMappingURL=oasys.js.map