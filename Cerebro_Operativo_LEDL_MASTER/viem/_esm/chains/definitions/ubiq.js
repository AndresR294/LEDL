import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const ubiq = /*#__PURE__*/ defineChain({
    id: 8,
    name: 'Ubiq Mainnet',
    nativeCurrency: { name: 'UBQ', symbol: 'UBQ', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://pyrus2.ubiqscan.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Ubiq Scan',
            url: 'https://ubiqscan.io',
        },
    },
    testnet: false,
});
//# sourceMappingURL=ubiq.js.map