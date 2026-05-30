import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/../utils/chain/defineChain.js';
export const skaleCryptoColosseum = /*#__PURE__*/ defineChain({
    id: 1_032_942_172,
    name: 'SKALE | Crypto Colosseum',
    nativeCurrency: { name: 'sFUEL', symbol: 'sFUEL', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://mainnet.skalenodes.com/v1/haunting-devoted-deneb'],
            webSocket: ['wss://mainnet.skalenodes.com/v1/ws/haunting-devoted-deneb'],
        },
    },
    blockExplorers: {
        default: {
            name: 'SKALE Explorer',
            url: 'https://haunting-devoted-deneb.explorer.mainnet.skalenodes.com',
        },
    },
    contracts: {},
});
//# sourceMappingURL=cryptoColosseum.js.map