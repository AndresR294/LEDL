import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const xgr = /*#__PURE__*/ defineChain({
    id: 1643,
    name: 'XGR Mainnet',
    nativeCurrency: {
        name: 'XGR',
        symbol: 'XGR',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.xgr.network'],
        },
    },
    blockExplorers: {
        default: {
            name: 'XGR Explorer',
            url: 'https://explorer.xgr.network',
        },
    },
});
//# sourceMappingURL=xgr.js.map