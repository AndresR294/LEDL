import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const xrOne = /*#__PURE__*/ defineChain({
    id: 273,
    name: 'XR One',
    nativeCurrency: {
        decimals: 18,
        name: 'XR1',
        symbol: 'XR1',
    },
    rpcUrls: {
        default: {
            http: ['https://xr1.calderachain.xyz/http'],
            webSocket: ['wss://xr1.calderachain.xyz/ws'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Blockscout',
            url: 'https://xr1.calderaexplorer.xyz',
        },
    },
    testnet: false,
});
//# sourceMappingURL=xrOne.js.map