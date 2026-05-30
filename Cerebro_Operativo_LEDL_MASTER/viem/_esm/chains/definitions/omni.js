import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const omni = /*#__PURE__*/ defineChain({
    id: 166,
    name: 'Omni',
    nativeCurrency: { name: 'Omni', symbol: 'OMNI', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://mainnet.omni.network'],
            webSocket: ['wss://mainnet.omni.network'],
        },
    },
    blockExplorers: {
        default: {
            name: 'OmniScan',
            url: 'https://omniscan.network',
        },
    },
    testnet: false,
});
//# sourceMappingURL=omni.js.map