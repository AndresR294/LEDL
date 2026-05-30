import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const fireChain = /*#__PURE__*/ defineChain({
    id: 995,
    name: '5ireChain',
    nativeCurrency: { name: '5ire Token', symbol: '5IRE', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.5ire.network'],
        },
    },
    blockExplorers: {
        default: {
            name: '5ireChain Mainnet Explorer',
            url: 'https://5irescan.io/',
        },
    },
    testnet: false,
});
//# sourceMappingURL=5ireChain.js.map