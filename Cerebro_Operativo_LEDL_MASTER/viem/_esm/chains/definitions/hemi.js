import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const hemi = /*#__PURE__*/ defineChain({
    id: 43111,
    name: 'Hemi',
    network: 'Hemi',
    blockTime: 12_000,
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.hemi.network/rpc'],
        },
    },
    blockExplorers: {
        default: {
            name: 'blockscout',
            url: 'https://explorer.hemi.xyz',
        },
    },
    testnet: false,
});
//# sourceMappingURL=hemi.js.map