import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const bronosTestnet = /*#__PURE__*/ defineChain({
    id: 1038,
    name: 'Bronos Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Bronos Coin',
        symbol: 'tBRO',
    },
    rpcUrls: {
        default: { http: ['https://evm-testnet.bronos.org'] },
    },
    blockExplorers: {
        default: {
            name: 'BronoScan',
            url: 'https://tbroscan.bronos.org',
        },
    },
    testnet: true,
});
//# sourceMappingURL=bronosTestnet.js.map