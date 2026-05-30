import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const oasisTestnet = /*#__PURE__*/ defineChain({
    id: 4090,
    network: 'oasis-testnet',
    name: 'Oasis Testnet',
    nativeCurrency: { name: 'Fasttoken', symbol: 'FTN', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://rpc1.oasis.bahamutchain.com'] },
    },
    blockExplorers: {
        default: {
            name: 'Ftnscan',
            url: 'https://oasis.ftnscan.com',
            apiUrl: 'https://oasis.ftnscan.com/api',
        },
    },
    testnet: true,
});
//# sourceMappingURL=oasisTestnet.js.map