import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const tomb = /*#__PURE__*/ defineChain({
    id: 6969,
    name: 'Tomb Mainnet',
    nativeCurrency: { name: 'TOMB', symbol: 'TOMB', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.tombchain.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Tomb Explorer',
            url: 'https://tombscout.com',
        },
    },
    testnet: false,
});
//# sourceMappingURL=tomb.js.map