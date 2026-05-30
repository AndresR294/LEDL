import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const qMainnet = /*#__PURE__*/ defineChain({
    id: 35441,
    name: 'Q Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Q',
        symbol: 'Q',
    },
    rpcUrls: {
        default: { http: ['https://rpc.q.org'] },
    },
    blockExplorers: {
        default: {
            name: 'Q Mainnet Explorer',
            url: 'https://explorer.q.org',
            apiUrl: 'https://explorer.q.org/api',
        },
    },
});
//# sourceMappingURL=qMainnet.js.map