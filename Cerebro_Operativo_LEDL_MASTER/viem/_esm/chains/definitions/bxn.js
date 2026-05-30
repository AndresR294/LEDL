import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const bxn = /*#__PURE__*/ defineChain({
    id: 4999,
    name: 'BlackFort Exchange Network',
    nativeCurrency: { name: 'BlackFort Token', symbol: 'BXN', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://mainnet.blackfort.network/rpc'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://explorer.blackfort.network',
            apiUrl: 'https://explorer.blackfort.network/api',
        },
    },
});
//# sourceMappingURL=bxn.js.map