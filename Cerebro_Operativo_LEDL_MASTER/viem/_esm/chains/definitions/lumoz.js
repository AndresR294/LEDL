import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const lumoz = /*#__PURE__*/ defineChain({
    id: 96_370,
    name: 'Lumoz',
    nativeCurrency: {
        decimals: 18,
        name: 'Lumoz Token',
        symbol: 'MOZ',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.lumoz.org'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Lumoz Scan',
            url: 'https://scan.lumoz.info',
        },
    },
    testnet: false,
});
//# sourceMappingURL=lumoz.js.map