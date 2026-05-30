import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const curtis = /*#__PURE__*/ defineChain({
    id: 33_111,
    name: 'Curtis',
    nativeCurrency: { name: 'ApeCoin', symbol: 'APE', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.curtis.apechain.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Curtis Explorer',
            url: 'https://explorer.curtis.apechain.com',
        },
    },
    testnet: true,
});
//# sourceMappingURL=curtis.js.map