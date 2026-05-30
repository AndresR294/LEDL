import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const bitgert = /*#__PURE__*/ defineChain({
    id: 32520,
    name: 'Bitgert Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Brise',
        symbol: 'Brise',
    },
    rpcUrls: {
        default: { http: ['https://rpc-bitgert.icecreamswap.com'] },
    },
    blockExplorers: {
        default: {
            name: 'Bitgert Scan',
            url: 'https://brisescan.com',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 2118034,
        },
    },
    testnet: false,
});
//# sourceMappingURL=bitgert.js.map