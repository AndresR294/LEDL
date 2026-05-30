import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
/** @deprecated Use `storyAeneid` instead  */
export const storyOdyssey = /*#__PURE__*/ defineChain({
    id: 1516,
    name: 'Story Odyssey',
    nativeCurrency: {
        decimals: 18,
        name: 'IP',
        symbol: 'IP',
    },
    rpcUrls: {
        default: { http: ['https://rpc.odyssey.storyrpc.io'] },
    },
    blockExplorers: {
        default: {
            name: 'Story Odyssey Explorer',
            url: 'https://odyssey.storyscan.xyz',
        },
    },
    testnet: true,
});
//# sourceMappingURL=storyOdyssey.js.map