import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const mantraEVM = /*#__PURE__*/ defineChain({
    id: 5888,
    name: 'MANTRA EVM',
    nativeCurrency: {
        decimals: 18,
        name: 'MANTRA',
        symbol: 'MANTRA',
    },
    rpcUrls: {
        default: {
            http: ['https://evm.mantrachain.io'],
            webSocket: ['https://evm.mantrachain.io/ws'],
        },
    },
    blockExplorers: {
        default: {
            name: 'MANTRA Blockscout Explorer',
            url: 'https://blockscout.mantrascan.io',
        },
    },
});
//# sourceMappingURL=mantraEVM.js.map