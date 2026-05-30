import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const yooldoVerseTestnet = /*#__PURE__*/ defineChain({
    id: 50_006,
    name: 'Yooldo Verse Testnet',
    nativeCurrency: { name: 'OAS', symbol: 'OAS', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.testnet.yooldo-verse.xyz'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Yooldo Verse Testnet Explorer',
            url: 'https://explorer.testnet.yooldo-verse.xyz',
        },
    },
    testnet: true,
});
//# sourceMappingURL=yooldoVerseTestnet.js.map