import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const reactiveTestnet = /*#__PURE__*/ defineChain({
    id: 5_318_007,
    name: 'Reactive Lasna Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Lasna React',
        symbol: 'lREACT',
    },
    rpcUrls: {
        default: { http: ['https://lasna-rpc.rnk.dev'] },
    },
    blockExplorers: {
        default: {
            name: 'Reactscan',
            url: 'https://lasna.reactscan.net',
        },
    },
    testnet: true,
});
//# sourceMappingURL=reactiveTestnet.js.map