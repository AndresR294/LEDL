import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const merlinErigonTestnet = /*#__PURE__*/ defineChain({
    id: 4203,
    name: 'Merlin Erigon Testnet',
    nativeCurrency: {
        name: 'BTC',
        symbol: 'BTC',
        decimals: 18,
    },
    rpcUrls: {
        default: { http: ['https://testnet-erigon-rpc.merlinchain.io'] },
    },
    blockExplorers: {
        default: {
            name: 'blockscout',
            url: 'https://testnet-erigon-scan.merlinchain.io',
            apiUrl: 'https://testnet-erigon-scan.merlinchain.io/api',
        },
    },
    testnet: true,
});
//# sourceMappingURL=merlinErigonTestnet.js.map