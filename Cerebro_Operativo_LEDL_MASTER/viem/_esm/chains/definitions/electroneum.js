import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const electroneum = /*#__PURE__*/ defineChain({
    id: 52014,
    name: 'Electroneum Mainnet',
    nativeCurrency: {
        name: 'ETN',
        symbol: 'ETN',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.electroneum.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Electroneum Block Explorer',
            url: 'https://blockexplorer.electroneum.com',
        },
    },
    testnet: false,
});
//# sourceMappingURL=electroneum.js.map