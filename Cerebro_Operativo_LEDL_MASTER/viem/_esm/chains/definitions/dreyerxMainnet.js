import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const dreyerxMainnet = /*#__PURE__*/ defineChain({
    id: 23451,
    name: 'DreyerX Mainnet',
    nativeCurrency: {
        name: 'DreyerX',
        symbol: 'DRX',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.dreyerx.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'DreyerX Scan',
            url: 'https://scan.dreyerx.com',
        },
    },
});
//# sourceMappingURL=dreyerxMainnet.js.map