import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const juneoGLD1Chain = /*#__PURE__*/ defineChain({
    id: 45_008,
    name: 'Juneo GLD1-Chain',
    nativeCurrency: {
        decimals: 18,
        name: 'Juneo GLD1-Chain',
        symbol: 'GLD1',
    },
    rpcUrls: {
        default: { http: ['https://rpc.juneo-mainnet.network/ext/bc/GLD1/rpc'] },
    },
    blockExplorers: {
        default: {
            name: 'Juneo Scan',
            url: 'https://juneoscan.io/chain/8',
            apiUrl: 'https://juneoscan.io/chain/8/api',
        },
    },
});
//# sourceMappingURL=juneoGLD1Chain.js.map