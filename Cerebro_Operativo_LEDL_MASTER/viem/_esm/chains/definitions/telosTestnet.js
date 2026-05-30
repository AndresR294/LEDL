import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const telosTestnet = /*#__PURE__*/ defineChain({
    id: 41,
    name: 'Telos',
    nativeCurrency: {
        decimals: 18,
        name: 'Telos',
        symbol: 'TLOS',
    },
    rpcUrls: {
        default: { http: ['https://rpc.testnet.telos.net'] },
    },
    blockExplorers: {
        default: {
            name: 'Teloscan (testnet)',
            url: 'https://testnet.teloscan.io/',
        },
    },
    testnet: true,
});
//# sourceMappingURL=telosTestnet.js.map