import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const seiTestnet = /*#__PURE__*/ defineChain({
    id: 1328,
    name: 'Sei Testnet',
    nativeCurrency: { name: 'Sei', symbol: 'SEI', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://evm-rpc-testnet.sei-apis.com'],
            webSocket: ['wss://evm-ws-testnet.sei-apis.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Seiscan',
            url: 'https://testnet.seiscan.io',
            apiUrl: 'https://api.etherscan.io/v2/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 98697651,
        },
    },
    testnet: true,
});
//# sourceMappingURL=seiTestnet.js.map