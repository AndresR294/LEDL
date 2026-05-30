import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const thunderTestnet = /*#__PURE__*/ defineChain({
    id: 997,
    name: '5ireChain Thunder Testnet',
    nativeCurrency: { name: '5ire Token', symbol: '5IRE', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.testnet.5ire.network'],
        },
    },
    blockExplorers: {
        default: {
            name: '5ireChain Thunder Explorer',
            url: 'https://testnet.5irescan.io/',
        },
    },
    testnet: true,
});
//# sourceMappingURL=thunderTestnet.js.map