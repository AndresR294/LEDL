import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const thunderCore = /*#__PURE__*/ defineChain({
    id: 108,
    name: 'ThunderCore Mainnet',
    nativeCurrency: { name: 'TT', symbol: 'TT', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://mainnet-rpc.thundercore.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'ThunderCore Explorer',
            url: 'https://explorer-mainnet.thundercore.com',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 0,
        },
    },
    testnet: false,
});
//# sourceMappingURL=thunderCore.js.map