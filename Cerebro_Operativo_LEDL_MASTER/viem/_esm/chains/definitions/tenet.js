import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const tenet = /*#__PURE__*/ defineChain({
    id: 1559,
    name: 'Tenet',
    network: 'tenet-mainnet',
    nativeCurrency: {
        name: 'TENET',
        symbol: 'TENET',
        decimals: 18,
    },
    rpcUrls: {
        default: { http: ['https://rpc.tenet.org'] },
    },
    blockExplorers: {
        default: {
            name: 'TenetScan Mainnet',
            url: 'https://tenetscan.io',
            apiUrl: 'https://tenetscan.io/api',
        },
    },
    testnet: false,
});
//# sourceMappingURL=tenet.js.map