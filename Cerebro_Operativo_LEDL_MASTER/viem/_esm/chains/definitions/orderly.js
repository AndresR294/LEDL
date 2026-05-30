import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const orderly = /*#__PURE__*/ defineChain({
    id: 291,
    name: 'Orderly',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://rpc.orderly.network'] },
    },
    blockExplorers: {
        default: {
            name: 'Orderly Explorer',
            url: 'https://explorer.orderly.network',
        },
    },
    testnet: false,
});
//# sourceMappingURL=orderly.js.map