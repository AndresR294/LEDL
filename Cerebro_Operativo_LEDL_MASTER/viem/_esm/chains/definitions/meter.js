import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const meter = /*#__PURE__*/ defineChain({
    id: 82,
    name: 'Meter',
    nativeCurrency: {
        decimals: 18,
        name: 'MTR',
        symbol: 'MTR',
    },
    rpcUrls: {
        default: { http: ['https://rpc.meter.io'] },
    },
    blockExplorers: {
        default: {
            name: 'MeterScan',
            url: 'https://scan.meter.io',
        },
    },
});
//# sourceMappingURL=meter.js.map