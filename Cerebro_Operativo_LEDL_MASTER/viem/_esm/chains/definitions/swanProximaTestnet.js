import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const swanProximaTestnet = /*#__PURE__*/ defineChain({
    id: 20241133,
    name: 'Swan Proxima Testnet',
    nativeCurrency: { name: 'Swan Ether', symbol: 'sETH', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://rpc-proxima.swanchain.io'] },
    },
    blockExplorers: {
        default: {
            name: 'Swan Explorer',
            url: 'https://proxima-explorer.swanchain.io',
        },
    },
    testnet: true,
});
//# sourceMappingURL=swanProximaTestnet.js.map