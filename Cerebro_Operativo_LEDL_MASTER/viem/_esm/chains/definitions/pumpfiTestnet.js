import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const pumpfiTestnet = /*#__PURE__*/ defineChain({
    id: 490_092,
    name: 'Pumpfi Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'PMPT',
        symbol: 'PMPT',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc1testnet.pumpfi.me'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Pumpfi Testnet Scan',
            url: 'https://testnetscan.pumpfi.me',
        },
    },
    testnet: true,
});
//# sourceMappingURL=pumpfiTestnet.js.map