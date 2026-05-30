import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const bobaSepolia = /*#__PURE__*/ defineChain({
    id: 28882,
    name: 'Boba Sepolia',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcUrls: {
        default: { http: ['https://sepolia.boba.network'] },
    },
    blockExplorers: {
        default: {
            name: 'BOBAScan',
            url: 'https://testnet.bobascan.com',
        },
    },
    testnet: true,
});
//# sourceMappingURL=bobaSepolia.js.map