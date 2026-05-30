import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const kakarotSepolia = /*#__PURE__*/ defineChain({
    id: 1802203764,
    name: 'Kakarot Sepolia',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://sepolia-rpc.kakarot.org'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Kakarot Scan',
            url: 'https://sepolia.kakarotscan.org',
        },
    },
    testnet: true,
});
//# sourceMappingURL=kakarotSepolia.js.map