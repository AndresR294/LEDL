import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const bearNetworkChainTestnet = /*#__PURE__*/ defineChain({
    id: 751230,
    name: 'Bear Network Chain Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'tBRNKC',
        symbol: 'tBRNKC',
    },
    rpcUrls: {
        default: { http: ['https://brnkc-test.bearnetwork.net'] },
    },
    blockExplorers: {
        default: {
            name: 'BrnkTestScan',
            url: 'https://brnktest-scan.bearnetwork.net',
            apiUrl: 'https://brnktest-scan.bearnetwork.net/api',
        },
    },
    testnet: true,
});
//# sourceMappingURL=bearNetworkChainTestnet.js.map