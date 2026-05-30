import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const wemixTestnet = /*#__PURE__*/ defineChain({
    id: 1112,
    name: 'WEMIX Testnet',
    network: 'wemix-testnet',
    nativeCurrency: { name: 'WEMIX', symbol: 'tWEMIX', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://api.test.wemix.com'] },
    },
    blockExplorers: {
        default: {
            name: 'wemixExplorer',
            url: 'https://testnet.wemixscan.com',
            apiUrl: 'https://testnet.wemixscan.com/api',
        },
    },
    testnet: true,
});
//# sourceMappingURL=wemixTestnet.js.map