import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const vanar = /*#__PURE__*/ defineChain({
    id: 2040,
    name: 'Vanar Mainnet',
    nativeCurrency: { name: 'VANRY', symbol: 'VANRY', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.vanarchain.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Vanar Mainnet Explorer',
            url: 'https://explorer.vanarchain.com/',
        },
    },
    testnet: false,
});
//# sourceMappingURL=vanar.js.map