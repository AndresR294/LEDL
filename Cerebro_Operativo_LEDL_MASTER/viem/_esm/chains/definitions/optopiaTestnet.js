import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const optopiaTestnet = /*#__PURE__*/ defineChain({
    id: 62049,
    name: 'Optopia Testnet',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://rpc-testnet.optopia.ai'] },
    },
    blockExplorers: {
        default: {
            name: 'Optopia Explorer',
            url: 'https://scan-testnet.optopia.ai',
        },
    },
    testnet: true,
});
//# sourceMappingURL=optopiaTestnet.js.map