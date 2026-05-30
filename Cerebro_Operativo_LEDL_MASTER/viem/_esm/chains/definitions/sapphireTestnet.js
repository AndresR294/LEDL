import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const sapphireTestnet = /*#__PURE__*/ defineChain({
    id: 23295,
    name: 'Oasis Sapphire Testnet',
    network: 'sapphire-testnet',
    nativeCurrency: { name: 'Sapphire Test Rose', symbol: 'TEST', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://testnet.sapphire.oasis.dev'],
            webSocket: ['wss://testnet.sapphire.oasis.dev/ws'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Oasis Explorer',
            url: 'https://explorer.oasis.io/testnet/sapphire',
        },
    },
    testnet: true,
});
//# sourceMappingURL=sapphireTestnet.js.map