import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const kiiTestnetOro = /*#__PURE__*/ defineChain({
    id: 1336,
    name: 'Kii Testnet Oro',
    network: 'kii-testnet-oro',
    nativeCurrency: {
        name: 'Kii',
        symbol: 'KII',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://json-rpc.uno.sentry.testnet.v3.kiivalidator.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'KiiExplorer',
            url: 'https://testnet.explorer.kiichain.io',
        },
    },
    testnet: true,
});
//# sourceMappingURL=kiiTestnet.js.map