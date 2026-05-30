import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const zeroNetwork = /*#__PURE__*/ defineChain({
    id: 543_210,
    name: 'Zero Network',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.zerion.io/v1/zero'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Zero Network Explorer',
            url: 'https://explorer.zero.network',
        },
    },
    testnet: false,
});
//# sourceMappingURL=zeroNetwork.js.map