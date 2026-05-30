import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const vision = /*#__PURE__*/ defineChain({
    id: 888888,
    name: 'Vision',
    nativeCurrency: { name: 'VISION', symbol: 'VS', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://infragrid.v.network/ethereum/compatible'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Vision Scan',
            url: 'https://visionscan.org',
        },
    },
    testnet: false,
});
//# sourceMappingURL=vision.js.map