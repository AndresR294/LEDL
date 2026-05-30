import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const quai = /*#__PURE__*/ defineChain({
    id: 9,
    name: 'Quai Network Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Quai',
        symbol: 'QUAI',
    },
    rpcUrls: {
        default: { http: ['https://rpc.quai.network/cyprus1'] },
    },
    blockExplorers: {
        default: {
            name: 'Quaiscan',
            url: 'https://quaiscan.io',
            apiUrl: 'https://quaiscan.io/api',
        },
    },
    testnet: false,
});
//# sourceMappingURL=quai.js.map