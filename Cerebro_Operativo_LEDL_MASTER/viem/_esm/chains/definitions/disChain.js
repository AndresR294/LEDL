import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const disChain = /*#__PURE__*/ defineChain({
    id: 513100,
    name: 'DisChain',
    nativeCurrency: {
        decimals: 18,
        name: 'DIS',
        symbol: 'DIS',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.dischain.xyz'],
        },
    },
    blockExplorers: {
        default: {
            name: 'DisChain Explorer',
            url: 'https://www.oklink.com/dis',
        },
    },
});
//# sourceMappingURL=disChain.js.map