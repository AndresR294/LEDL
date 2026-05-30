import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const sova = /*#__PURE__*/ defineChain({
    id: 100_021,
    name: 'Sova',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.sova.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Sova Block Explorer',
            url: 'https://explorer.sova.io',
        },
    },
    testnet: false,
});
//# sourceMappingURL=sova.js.map