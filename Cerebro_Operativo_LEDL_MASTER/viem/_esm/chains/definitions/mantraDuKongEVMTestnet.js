import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const mantraDuKongEVMTestnet = /*#__PURE__*/ defineChain({
    id: 5887,
    name: 'MANTRA DuKong EVM Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'MANTRA',
        symbol: 'MANTRA',
    },
    rpcUrls: {
        default: { http: ['https://evm.dukong.mantrachain.io'] },
    },
    blockExplorers: {
        default: {
            name: 'MANTRAScan',
            url: 'https://mantrascan.io/dukong',
        },
    },
    testnet: true,
});
//# sourceMappingURL=mantraDuKongEVMTestnet.js.map