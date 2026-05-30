import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const juneoEUR1Chain = /*#__PURE__*/ defineChain({
    id: 45_011,
    name: 'Juneo EUR1-Chain',
    nativeCurrency: {
        decimals: 18,
        name: 'Juneo EUR1-Chain',
        symbol: 'EUR1',
    },
    rpcUrls: {
        default: { http: ['https://rpc.juneo-mainnet.network/ext/bc/EUR1/rpc'] },
    },
    blockExplorers: {
        default: {
            name: 'Juneo Scan',
            url: 'https://juneoscan.io/chain/6',
            apiUrl: 'https://juneoscan.io/chain/6/api',
        },
    },
});
//# sourceMappingURL=juneoEUR1Chain.js.map