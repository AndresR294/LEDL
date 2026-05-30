import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const fluence = /*#__PURE__*/ defineChain({
    id: 9_999_999,
    name: 'Fluence',
    nativeCurrency: { name: 'FLT', symbol: 'FLT', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.mainnet.fluence.dev'],
            webSocket: ['wss://ws.mainnet.fluence.dev'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://blockscout.mainnet.fluence.dev',
            apiUrl: 'https://blockscout.mainnet.fluence.dev/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 207583,
        },
    },
});
//# sourceMappingURL=fluence.js.map