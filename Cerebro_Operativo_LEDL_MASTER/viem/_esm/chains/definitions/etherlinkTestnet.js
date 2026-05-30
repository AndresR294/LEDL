import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const etherlinkTestnet = /*#__PURE__*/ defineChain({
    id: 128123,
    name: 'Etherlink Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Tez',
        symbol: 'XTZ',
    },
    rpcUrls: {
        default: { http: ['https://node.ghostnet.etherlink.com'] },
    },
    blockExplorers: {
        default: {
            name: 'Etherlink Testnet',
            url: 'https://testnet.explorer.etherlink.com',
        },
    },
    testnet: true,
});
//# sourceMappingURL=etherlinkTestnet.js.map