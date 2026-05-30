import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const seismicDevnet = /*#__PURE__*/ defineChain({
    id: 5124,
    name: 'Seismic Devnet',
    nativeCurrency: { name: 'Seismic Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://node-2.seismicdev.net/rpc'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Seismic Devnet Explorer',
            url: 'https://explorer-2.seismicdev.net',
        },
    },
    testnet: true,
});
//# sourceMappingURL=seismicDevnet.js.map