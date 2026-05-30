import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const xphereMainnet = /*#__PURE__*/ defineChain({
    id: 20250217,
    name: 'Xphere Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'XP',
        symbol: 'XP',
    },
    rpcUrls: {
        default: {
            http: ['https://en-bkk.x-phere.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Xphere Tamsa Explorer',
            url: 'https://xp.tamsa.io',
        },
    },
    testnet: false,
});
//# sourceMappingURL=xphereMainnet.js.map