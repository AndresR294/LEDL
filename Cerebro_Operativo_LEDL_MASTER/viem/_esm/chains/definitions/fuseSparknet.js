import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const fuseSparknet = /*#__PURE__*/ defineChain({
    id: 123,
    name: 'Fuse Sparknet',
    nativeCurrency: { name: 'Spark', symbol: 'SPARK', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://rpc.fusespark.io'] },
    },
    blockExplorers: {
        default: {
            name: 'Sparkent Explorer',
            url: 'https://explorer.fusespark.io',
            apiUrl: 'https://explorer.fusespark.io/api',
        },
    },
});
//# sourceMappingURL=fuseSparknet.js.map