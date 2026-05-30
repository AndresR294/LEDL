import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const radiusTestnet = /*#__PURE__*/ defineChain({
    id: 72_344,
    name: 'Radius Test Network',
    nativeCurrency: { name: 'Radius USD', symbol: 'RUSD', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.testnet.radiustech.xyz'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Radius Test Network Explorer',
            url: 'https://testnet.radiustech.xyz',
        },
    },
    testnet: true,
});
//# sourceMappingURL=radiusTestnet.js.map