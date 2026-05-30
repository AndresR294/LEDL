import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../utils/chain/defineChain.js';
export const skaleEuropa = /*#__PURE__*/ defineChain({
    id: 2_046_399_126,
    name: 'SKALE Europa Hub',
    nativeCurrency: { name: 'sFUEL', symbol: 'sFUEL', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://mainnet.skalenodes.com/v1/elated-tan-skat'],
            webSocket: ['wss://mainnet.skalenodes.com/v1/ws/elated-tan-skat'],
        },
    },
    blockExplorers: {
        default: {
            name: 'SKALE Explorer',
            url: 'https://elated-tan-skat.explorer.mainnet.skalenodes.com',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 3_113_495,
        },
    },
});
//# sourceMappingURL=europa.js.map