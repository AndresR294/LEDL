import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const telcoinTestnet = /*#__PURE__*/ defineChain({
    id: 2017,
    name: 'Telcoin Adiri Testnet',
    nativeCurrency: { name: 'Telcoin', symbol: 'TEL', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.telcoin.network'],
        },
    },
    blockExplorers: {
        default: {
            name: 'telscan',
            url: 'https://telscan.io',
        },
    },
    testnet: true,
});
//# sourceMappingURL=telcoinTestnet.js.map