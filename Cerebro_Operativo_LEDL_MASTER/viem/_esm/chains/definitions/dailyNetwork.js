import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const dailyNetwork = /*#__PURE__*/ defineChain({
    id: 824,
    name: 'Daily Network Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Daily',
        symbol: 'DLY',
    },
    rpcUrls: {
        default: { http: ['https://rpc.mainnet.dailycrypto.net'] },
    },
    blockExplorers: {
        default: {
            name: 'Daily Mainnet Explorer',
            url: 'https://explorer.mainnet.dailycrypto.net',
        },
    },
    testnet: false,
});
//# sourceMappingURL=dailyNetwork.js.map