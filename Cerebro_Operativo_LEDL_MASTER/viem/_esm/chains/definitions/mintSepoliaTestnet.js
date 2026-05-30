import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const mintSepoliaTestnet = /*#__PURE__*/ defineChain({
    id: 1686,
    name: 'Mint Sepolia Testnet',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://testnet-rpc.mintchain.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Mintchain Testnet explorer',
            url: 'https://testnet-explorer.mintchain.io',
        },
    },
    testnet: true,
});
//# sourceMappingURL=mintSepoliaTestnet.js.map