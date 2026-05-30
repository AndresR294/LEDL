import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const premiumBlockTestnet = /*#__PURE__*/ defineChain({
    id: 23_023,
    name: 'PremiumBlock Testnet',
    nativeCurrency: { name: 'Premium Block', symbol: 'PBLK', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.premiumblock.org'],
        },
    },
    blockExplorers: {
        default: {
            name: 'PremiumBlocks Explorer',
            url: 'https://scan.premiumblock.org',
        },
    },
    testnet: true,
});
//# sourceMappingURL=premiumBlock.js.map