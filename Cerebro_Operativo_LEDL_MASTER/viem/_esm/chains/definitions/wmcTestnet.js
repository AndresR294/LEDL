import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const wmcTestnet = /*#__PURE__*/ defineChain({
    id: 42070,
    name: 'WMC Testnet',
    nativeCurrency: { name: 'WMTx', symbol: 'WMTx', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc-testnet-base.worldmobile.net'],
        },
    },
    blockExplorers: {
        default: {
            name: 'WMC Explorer',
            url: 'https://explorer2-base-testnet.worldmobile.net',
        },
    },
    testnet: true,
});
//# sourceMappingURL=wmcTestnet.js.map