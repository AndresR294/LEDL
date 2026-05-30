import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const shiden = /*#__PURE__*/ defineChain({
    id: 336,
    name: 'Shiden',
    nativeCurrency: {
        decimals: 18,
        name: 'SDN',
        symbol: 'SDN',
    },
    rpcUrls: {
        default: {
            http: ['https://shiden.public.blastapi.io'],
            webSocket: ['wss://shiden-rpc.dwellir.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Shiden Scan',
            url: 'https://shiden.subscan.io',
        },
    },
    testnet: false,
});
//# sourceMappingURL=shiden.js.map