import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const matchain = /*#__PURE__*/ defineChain({
    id: 698,
    name: 'Matchain',
    nativeCurrency: {
        name: 'BNB',
        symbol: 'BNB',
        decimals: 18,
    },
    rpcUrls: {
        default: { http: ['https://rpc.matchain.io'] },
    },
    blockExplorers: {
        default: {
            name: 'Matchain Scan',
            url: 'https://matchscan.io',
        },
    },
});
//# sourceMappingURL=matchain.js.map