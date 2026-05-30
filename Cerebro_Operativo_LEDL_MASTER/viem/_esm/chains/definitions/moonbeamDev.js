import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const moonbeamDev = /*#__PURE__*/ defineChain({
    id: 1281,
    name: 'Moonbeam Development Node',
    nativeCurrency: {
        decimals: 18,
        name: 'DEV',
        symbol: 'DEV',
    },
    rpcUrls: {
        default: {
            http: ['http://127.0.0.1:9944'],
            webSocket: ['wss://127.0.0.1:9944'],
        },
    },
});
//# sourceMappingURL=moonbeamDev.js.map