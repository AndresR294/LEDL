import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const meterTestnet = /*#__PURE__*/ defineChain({
    id: 83,
    name: 'Meter Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'MTR',
        symbol: 'MTR',
    },
    rpcUrls: {
        default: { http: ['https://rpctest.meter.io'] },
    },
    blockExplorers: {
        default: {
            name: 'MeterTestnetScan',
            url: 'https://scan-warringstakes.meter.io',
        },
    },
    testnet: true,
});
//# sourceMappingURL=meterTestnet.js.map