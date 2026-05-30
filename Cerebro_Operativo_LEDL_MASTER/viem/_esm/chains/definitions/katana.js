import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const katana = /*#__PURE__*/ defineChain({
    id: 747474,
    name: 'Katana',
    network: 'katana',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.katana.network'],
        },
    },
    blockExplorers: {
        default: {
            name: 'katana explorer',
            url: 'https://katanascan.com',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 0,
        },
    },
    testnet: false,
});
//# sourceMappingURL=katana.js.map