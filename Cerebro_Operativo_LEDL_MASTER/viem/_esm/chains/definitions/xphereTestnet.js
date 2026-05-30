import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const xphereTestnet = /*#__PURE__*/ defineChain({
    id: 1998991,
    name: 'Xphere Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'XPT',
        symbol: 'XPT',
    },
    rpcUrls: {
        default: {
            http: ['http://testnet.x-phere.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Xphere Tamsa Explorer',
            url: 'https://xpt.tamsa.io',
        },
    },
    testnet: true,
});
//# sourceMappingURL=xphereTestnet.js.map