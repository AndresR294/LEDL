import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const bitTorrentTestnet = /*#__PURE__*/ defineChain({
    id: 1028,
    name: 'BitTorrent Chain Testnet',
    network: 'bittorrent-chain-testnet',
    nativeCurrency: { name: 'BitTorrent', symbol: 'BTT', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://testrpc.bittorrentchain.io'] },
    },
    blockExplorers: {
        default: {
            name: 'Bttcscan',
            url: 'https://testnet.bttcscan.com',
            apiUrl: 'https://testnet.bttcscan.com/api',
        },
    },
    testnet: true,
});
//# sourceMappingURL=bitTorrentTestnet.js.map