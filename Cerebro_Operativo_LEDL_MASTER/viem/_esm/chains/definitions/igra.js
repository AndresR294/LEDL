import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const igra = /*#__PURE__*/ defineChain({
    id: 38833,
    name: 'Igra Network',
    nativeCurrency: {
        decimals: 18,
        name: 'iKAS',
        symbol: 'iKAS',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.igralabs.com:8545'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Igra Explorer',
            url: 'https://explorer.igralabs.com',
        },
    },
    testnet: false,
});
//# sourceMappingURL=igra.js.map