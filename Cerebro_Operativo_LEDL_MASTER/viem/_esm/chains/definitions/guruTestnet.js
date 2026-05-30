import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const guruTestnet = /*#__PURE__*/ defineChain({
    id: 261,
    name: 'Guru Network Testnet',
    nativeCurrency: {
        name: 'tGURU Token',
        symbol: 'tGURU',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc-test.gurunetwork.ai',
                'https://rpc.gurunetwork.ai/archive/261',
            ],
        },
    },
    blockExplorers: {
        default: {
            name: 'Guruscan',
            url: 'https://sepolia.gurunetwork.ai',
        },
    },
    testnet: true,
});
//# sourceMappingURL=guruTestnet.js.map