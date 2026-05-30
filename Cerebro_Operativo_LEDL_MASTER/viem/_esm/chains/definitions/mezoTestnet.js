import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const mezoTestnet = /*#__PURE__*/ defineChain({
    id: 31_611,
    name: 'Mezo Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Bitcoin',
        symbol: 'BTC',
    },
    rpcUrls: {
        default: { http: ['https://rpc.test.mezo.org'] },
    },
    blockExplorers: {
        default: {
            name: 'Mezo Testnet Explorer',
            url: 'https://explorer.test.mezo.org',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 3_328_573,
        },
    },
    testnet: true,
});
//# sourceMappingURL=mezoTestnet.js.map