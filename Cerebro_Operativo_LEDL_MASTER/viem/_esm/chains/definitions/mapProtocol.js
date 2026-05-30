import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const mapProtocol = /*#__PURE__*/ defineChain({
    id: 22776,
    name: 'MAP Protocol',
    nativeCurrency: {
        decimals: 18,
        name: 'MAPO',
        symbol: 'MAPO',
    },
    rpcUrls: {
        default: { http: ['https://rpc.maplabs.io'] },
    },
    blockExplorers: {
        default: {
            name: 'MAPO Scan',
            url: 'https://maposcan.io',
        },
    },
    testnet: false,
});
//# sourceMappingURL=mapProtocol.js.map