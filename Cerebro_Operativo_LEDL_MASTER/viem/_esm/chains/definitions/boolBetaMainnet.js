import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const boolBetaMainnet = /*#__PURE__*/ defineChain({
    id: 11100,
    name: 'Bool Beta Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'BOL',
        symbol: 'BOL',
    },
    rpcUrls: {
        default: { http: ['https://beta-rpc-node-http.bool.network'] },
    },
    blockExplorers: {
        default: {
            name: 'BoolScan',
            url: 'https://beta-mainnet.boolscan.com/',
        },
    },
    testnet: false,
});
//# sourceMappingURL=boolBetaMainnet.js.map