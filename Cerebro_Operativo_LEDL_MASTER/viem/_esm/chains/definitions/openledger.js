import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const openledger = /*#__PURE__*/ defineChain({
    id: 1612,
    name: 'OpenLedger',
    nativeCurrency: { name: 'Open', symbol: 'OPEN', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://rpc.openledger.xyz'] },
    },
    blockExplorers: {
        default: {
            name: 'OpenLedger Explorer',
            url: 'https://scan.openledger.xyz',
        },
    },
    testnet: false,
});
//# sourceMappingURL=openledger.js.map