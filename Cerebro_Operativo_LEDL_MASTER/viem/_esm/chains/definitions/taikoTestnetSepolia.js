import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const taikoTestnetSepolia = /*#__PURE__*/ defineChain({
    id: 167005,
    name: 'Taiko (Alpha-3 Testnet)',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.test.taiko.xyz'],
        },
    },
    blockExplorers: {
        default: {
            name: 'blockscout',
            url: 'https://explorer.test.taiko.xyz',
        },
    },
    testnet: true,
});
//# sourceMappingURL=taikoTestnetSepolia.js.map