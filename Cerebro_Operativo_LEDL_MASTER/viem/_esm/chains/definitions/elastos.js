import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const elastos = /*#__PURE__*/ defineChain({
    id: 20,
    name: 'Elastos Smart Chain',
    nativeCurrency: { name: 'ELA', symbol: 'ELA', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://api2.elastos.io/eth'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Elastos Explorer',
            url: 'https://esc.elastos.io',
        },
    },
    testnet: false,
});
//# sourceMappingURL=elastos.js.map