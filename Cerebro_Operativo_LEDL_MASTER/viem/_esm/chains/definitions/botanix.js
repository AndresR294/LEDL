// src/chains/definitions/example.ts
import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const botanix = /*#__PURE__*/ defineChain({
    id: 3637,
    name: 'Botanix',
    nativeCurrency: { name: 'Bitcoin', symbol: 'BTC', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.botanixlabs.com'],
            webSocket: ['wss://rpc.botanixlabs.com/ws'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Botanixscan',
            url: 'https://botanixscan.io',
        },
    },
});
//# sourceMappingURL=botanix.js.map