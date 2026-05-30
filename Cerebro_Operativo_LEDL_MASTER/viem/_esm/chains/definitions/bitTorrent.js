import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const bitTorrent = /*#__PURE__*/ defineChain({
    id: 199,
    name: 'BitTorrent',
    network: 'bittorrent-chain-mainnet',
    nativeCurrency: { name: 'BitTorrent', symbol: 'BTT', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://rpc.bittorrentchain.io'] },
    },
    blockExplorers: {
        default: {
            name: 'Bttcscan',
            url: 'https://bttcscan.com',
            apiUrl: 'https://api.bttcscan.com/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 31078552,
        },
    },
});
//# sourceMappingURL=bitTorrent.js.map