import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const arthera = /*#__PURE__*/ defineChain({
    id: 10242,
    name: 'Arthera',
    nativeCurrency: { name: 'Arthera', symbol: 'AA', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.arthera.net'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Arthera EVM Explorer',
            url: 'https://explorer.arthera.net',
            apiUrl: 'https://explorer.arthera.net/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 4502791,
        },
    },
});
//# sourceMappingURL=arthera.js.map