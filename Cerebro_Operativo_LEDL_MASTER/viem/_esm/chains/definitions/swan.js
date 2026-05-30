import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const swan = /*#__PURE__*/ defineChain({
    id: 254,
    name: 'Swan Chain Mainnet',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://mainnet-rpc.swanchain.org'] },
    },
    blockExplorers: {
        default: {
            name: 'Swan Explorer',
            url: 'https://swanscan.io',
        },
    },
    testnet: false,
});
//# sourceMappingURL=swan.js.map