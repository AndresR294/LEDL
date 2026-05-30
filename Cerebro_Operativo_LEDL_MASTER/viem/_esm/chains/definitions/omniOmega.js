import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const omniOmega = /*#__PURE__*/ defineChain({
    id: 164,
    name: 'Omni Omega',
    nativeCurrency: { name: 'Omni', symbol: 'OMNI', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://omega.omni.network'],
            webSocket: ['wss://omega.omni.network'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Omega OmniScan',
            url: 'https://omega.omniscan.network/',
        },
    },
    testnet: true,
});
//# sourceMappingURL=omniOmega.js.map