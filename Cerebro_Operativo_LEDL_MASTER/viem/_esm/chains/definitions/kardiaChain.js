import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const kardiaChain = /*#__PURE__*/ defineChain({
    id: 24,
    name: 'KardiaChain Mainnet',
    nativeCurrency: { name: 'KAI', symbol: 'KAI', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.kardiachain.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'KardiaChain Explorer',
            url: 'https://explorer.kardiachain.io',
        },
    },
    testnet: false,
});
//# sourceMappingURL=kardiaChain.js.map