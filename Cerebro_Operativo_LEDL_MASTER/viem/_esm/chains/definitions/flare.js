import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const flare = /*#__PURE__*/ defineChain({
    id: 14,
    name: 'Flare Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Flare',
        symbol: 'FLR',
    },
    rpcUrls: {
        default: { http: ['https://flare-api.flare.network/ext/C/rpc'] },
    },
    blockExplorers: {
        default: {
            name: 'Flare Explorer',
            url: 'https://flare-explorer.flare.network',
            apiUrl: 'https://flare-explorer.flare.network/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 3002461,
        },
    },
});
//# sourceMappingURL=flare.js.map