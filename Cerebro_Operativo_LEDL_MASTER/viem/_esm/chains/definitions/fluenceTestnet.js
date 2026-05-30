import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const fluenceTestnet = /*#__PURE__*/ defineChain({
    id: 52_164_803,
    name: 'Fluence Testnet',
    nativeCurrency: { name: 'tFLT', symbol: 'tFLT', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.testnet.fluence.dev'],
            webSocket: ['wss://ws.testnet.fluence.dev'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://blockscout.testnet.fluence.dev',
            apiUrl: 'https://blockscout.testnet.fluence.dev/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 96424,
        },
    },
    testnet: true,
});
//# sourceMappingURL=fluenceTestnet.js.map