import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const edgewareTestnet = /*#__PURE__*/ defineChain({
    id: 2022,
    name: 'Beresheet BereEVM Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Testnet EDG',
        symbol: 'tEDG',
    },
    rpcUrls: {
        default: { http: ['https://beresheet-evm.jelliedowl.net'] },
    },
    blockExplorers: {
        default: {
            name: 'Edgscan by Bharathcoorg',
            url: 'https://testnet.edgscan.live',
            apiUrl: 'https://testnet.edgscan.live/api',
        },
    },
    testnet: true,
});
//# sourceMappingURL=edgewareTestnet.js.map