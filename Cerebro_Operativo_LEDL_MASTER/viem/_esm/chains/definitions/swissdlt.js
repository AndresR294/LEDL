import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const swissdlt = /*#__PURE__*/ defineChain({
    id: 94,
    name: 'SwissDLT Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'BCTS',
        symbol: 'BCTS',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.swissdlt.ch'],
        },
    },
    blockExplorers: {
        default: {
            name: 'SwissDLT Explorer',
            url: 'https://explorer.swissdlt.ch',
        },
    },
    testnet: false,
});
//# sourceMappingURL=swissdlt.js.map