import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const oortMainnetDev = /*#__PURE__*/ defineChain({
    id: 9700,
    name: 'OORT MainnetDev',
    nativeCurrency: {
        decimals: 18,
        name: 'OORT',
        symbol: 'OORT',
    },
    rpcUrls: {
        default: { http: ['https://dev-rpc.oortech.com'] },
    },
    blockExplorers: {
        default: {
            name: 'OORT MainnetDev Explorer',
            url: 'https://dev-scan.oortech.com',
        },
    },
});
//# sourceMappingURL=oortmainnetDev.js.map