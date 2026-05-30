import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const autheoTestnet = /*#__PURE__*/ defineChain({
    id: 785,
    name: 'Autheo Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Autheo',
        symbol: 'THEO',
    },
    rpcUrls: {
        default: {
            http: [
                'https://testnet-rpc1.autheo.com',
                'https://testnet-rpc2.autheo.com',
            ],
        },
    },
    blockExplorers: {
        default: {
            name: 'Autheo Testnet Block Explorer',
            url: 'https://testnet-explorer.autheo.com/',
        },
    },
    testnet: true,
});
//# sourceMappingURL=autheoTestnet.js.map