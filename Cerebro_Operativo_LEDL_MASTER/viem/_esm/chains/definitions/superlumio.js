import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const superlumio = /*#__PURE__*/ defineChain({
    id: 8866,
    name: 'SuperLumio',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://mainnet.lumio.io'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Lumio explorer',
            url: 'https://explorer.lumio.io',
        },
    },
    testnet: false,
});
//# sourceMappingURL=superlumio.js.map