import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const cronoszkEVMTestnet = /*#__PURE__*/ defineChain({
    id: 282,
    name: 'Cronos zkEVM Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Cronos zkEVM Test Coin',
        symbol: 'zkTCRO',
    },
    rpcUrls: {
        default: { http: ['https://testnet.zkevm.cronos.org'] },
    },
    blockExplorers: {
        default: {
            name: 'Cronos zkEVM Testnet Explorer',
            url: 'https://explorer.zkevm.cronos.org/testnet',
        },
    },
    testnet: true,
});
//# sourceMappingURL=cronoszkEVMTestnet.js.map