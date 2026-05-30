import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const xoneTestnet = /*#__PURE__*/ defineChain({
    id: 33772211,
    name: 'Xone Chain Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'XOC',
        symbol: 'XOC',
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc-testnet.xone.org',
                'https://rpc-testnet.xone.plus',
                'https://rpc-testnet.knight.center',
            ],
        },
    },
    blockExplorers: {
        default: {
            name: 'Xone Testnet Explorer',
            url: 'https://testnet.xonescan.com',
            apiUrl: 'http://api.testnet.xonescan.com/api',
        },
    },
    testnet: true,
});
//# sourceMappingURL=xoneTestnet.js.map