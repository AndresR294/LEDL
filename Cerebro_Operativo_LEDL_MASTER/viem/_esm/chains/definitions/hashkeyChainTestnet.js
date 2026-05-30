import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const hashkeyTestnet = /*#__PURE__*/ defineChain({
    id: 133,
    name: 'HashKey Chain Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'HashKey EcoPoints',
        symbol: 'HSK',
    },
    rpcUrls: {
        default: {
            http: ['https://testnet.hsk.xyz'],
        },
    },
    blockExplorers: {
        default: {
            name: 'HashKey Chain Testnet explorer',
            url: 'https://testnet-explorer.hsk.xyz',
        },
    },
    testnet: true,
});
//# sourceMappingURL=hashkeyChainTestnet.js.map