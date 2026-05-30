import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const oneWorld = /*#__PURE__*/ defineChain({
    id: 309075,
    name: 'One World Chain Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'OWCT',
        symbol: 'OWCT',
    },
    rpcUrls: {
        default: { http: ['https://mainnet-rpc.oneworldchain.org'] },
    },
    blockExplorers: {
        default: {
            name: 'One World Explorer',
            url: 'https://mainnet.oneworldchain.org',
        },
    },
    testnet: false,
});
//# sourceMappingURL=oneWorld.js.map