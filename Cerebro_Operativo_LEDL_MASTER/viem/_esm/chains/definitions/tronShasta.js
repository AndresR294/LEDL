import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const tronShasta = /*#__PURE__*/ defineChain({
    id: 2494104990,
    name: 'Tron Shasta',
    nativeCurrency: { name: 'TRON', symbol: 'TRX', decimals: 6 },
    rpcUrls: {
        default: {
            http: ['https://api.shasta.trongrid.io/jsonrpc'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Tronscan',
            url: 'https://shasta.tronscan.org',
        },
    },
    testnet: true,
});
//# sourceMappingURL=tronShasta.js.map