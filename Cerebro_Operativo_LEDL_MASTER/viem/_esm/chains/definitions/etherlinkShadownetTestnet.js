import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const etherlinkShadownetTestnet = /*#__PURE__*/ defineChain({
    id: 127823,
    name: 'Etherlink Shadownet Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'tez',
        symbol: 'XTZ',
    },
    rpcUrls: {
        default: { http: ['https://node.shadownet.etherlink.com'] },
    },
    blockExplorers: {
        default: {
            name: 'Etherlink Shadownet Testnet Explorer',
            url: 'https://shadownet.explorer.etherlink.com',
        },
    },
    testnet: true,
});
//# sourceMappingURL=etherlinkShadownetTestnet.js.map