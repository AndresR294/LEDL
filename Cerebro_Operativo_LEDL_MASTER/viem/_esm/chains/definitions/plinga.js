import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const plinga = /*#__PURE__*/ defineChain({
    id: 242,
    name: 'Plinga',
    nativeCurrency: { name: 'Plinga', symbol: 'PLINGA', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpcurl.mainnet.plgchain.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Plgscan',
            url: 'https://www.plgscan.com',
        },
    },
    contracts: {
        multicall3: {
            address: '0x0989576160f2e7092908BB9479631b901060b6e4',
            blockCreated: 204489,
        },
    },
});
//# sourceMappingURL=plinga.js.map