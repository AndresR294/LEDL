import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const zkXPLA = /*#__PURE__*/ defineChain({
    id: 375,
    name: 'zkXPLA Mainnet',
    network: 'zkxpla',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.zkxpla.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'zkXPLA Mainnet Explorer',
            url: 'https://explorer.zkxpla.io',
            apiUrl: 'https://explorer.zkxpla.io/api',
        },
    },
    testnet: false,
});
//# sourceMappingURL=zkXPLA.js.map