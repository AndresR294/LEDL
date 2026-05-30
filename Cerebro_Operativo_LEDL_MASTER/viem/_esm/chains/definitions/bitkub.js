import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const bitkub = /*#__PURE__*/ defineChain({
    id: 96,
    name: 'KUB Mainnet',
    nativeCurrency: { name: 'KUB Coin', symbol: 'KUB', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.bitkubchain.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'KUB Chain Mainnet Explorer',
            url: 'https://www.bkcscan.com',
            apiUrl: 'https://www.bkcscan.com/api',
        },
    },
});
//# sourceMappingURL=bitkub.js.map