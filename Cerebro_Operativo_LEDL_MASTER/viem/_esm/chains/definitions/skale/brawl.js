import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../utils/chain/defineChain.js';
export const skaleBlockBrawlers = /*#__PURE__*/ defineChain({
    id: 391_845_894,
    name: 'SKALE | Block Brawlers',
    nativeCurrency: { name: 'BRAWL', symbol: 'BRAWL', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://mainnet.skalenodes.com/v1/frayed-decent-antares'],
            webSocket: ['wss://mainnet.skalenodes.com/v1/ws/frayed-decent-antares'],
        },
    },
    blockExplorers: {
        default: {
            name: 'SKALE Explorer',
            url: 'https://frayed-decent-antares.explorer.mainnet.skalenodes.com',
        },
    },
    contracts: {},
});
//# sourceMappingURL=brawl.js.map