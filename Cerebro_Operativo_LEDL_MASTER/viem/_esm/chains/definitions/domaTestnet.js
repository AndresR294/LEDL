import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const domaTestnet = /*#__PURE__*/ defineChain({
    id: 97_476,
    name: 'Doma Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: { http: ['https://rpc-testnet.doma.xyz'] },
    },
    blockExplorers: {
        default: {
            name: 'Doma Testnet Explorer',
            url: 'https://explorer-testnet.doma.xyz',
        },
    },
    testnet: true,
});
//# sourceMappingURL=domaTestnet.js.map