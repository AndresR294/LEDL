import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const birdlayer = /*#__PURE__*/ defineChain({
    id: 53456,
    name: 'BirdLayer',
    nativeCurrency: { decimals: 18, name: 'Ether', symbol: 'ETH' },
    rpcUrls: {
        default: {
            http: ['https://rpc.birdlayer.xyz', 'https://rpc1.birdlayer.xyz'],
            webSocket: ['wss://rpc.birdlayer.xyz/ws'],
        },
    },
    blockExplorers: {
        default: {
            name: 'BirdLayer Explorer',
            url: 'https://scan.birdlayer.xyz',
        },
    },
});
//# sourceMappingURL=birdlayer.js.map