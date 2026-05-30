import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const tron = /*#__PURE__*/ defineChain({
    id: 728126428,
    name: 'Tron',
    nativeCurrency: { name: 'TRON', symbol: 'TRX', decimals: 6 },
    rpcUrls: {
        default: {
            http: ['https://api.trongrid.io/jsonrpc'],
        },
    },
    blockTime: 3000,
    blockExplorers: {
        default: {
            name: 'Tronscan',
            url: 'https://tronscan.org',
            apiUrl: 'https://apilist.tronscanapi.com/api',
        },
    },
});
//# sourceMappingURL=tron.js.map