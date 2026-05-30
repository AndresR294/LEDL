import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const sanko = /*#__PURE__*/ defineChain({
    id: 1996,
    name: 'Sanko',
    nativeCurrency: { name: 'DMT', symbol: 'DMT', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://mainnet.sanko.xyz'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Sanko Explorer',
            url: 'https://explorer.sanko.xyz',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 37,
        },
    },
    testnet: false,
});
//# sourceMappingURL=sanko.js.map