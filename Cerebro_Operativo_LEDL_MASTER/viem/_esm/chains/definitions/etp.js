import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const etp = /*#__PURE__*/ defineChain({
    id: 20_256_789,
    name: 'ETP Mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'ETP Chain Native Token',
        symbol: 'ETP',
    },
    rpcUrls: {
        default: { http: ['https://rpc.etpscan.xyz'] },
    },
    blockExplorers: {
        default: {
            name: 'ETP Scan',
            url: 'https://etpscan.xyz',
        },
    },
});
//# sourceMappingURL=etp.js.map