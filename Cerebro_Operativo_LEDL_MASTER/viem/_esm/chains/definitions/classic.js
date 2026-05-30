import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const classic = /*#__PURE__*/ defineChain({
    id: 61,
    name: 'Ethereum Classic',
    nativeCurrency: {
        decimals: 18,
        name: 'ETC',
        symbol: 'ETC',
    },
    rpcUrls: {
        default: { http: ['https://etc.rivet.link'] },
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://blockscout.com/etc/mainnet',
        },
    },
});
//# sourceMappingURL=classic.js.map