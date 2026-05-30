import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const satoshiVM = /*#__PURE__*/ defineChain({
    id: 3109,
    name: 'SatoshiVM Alpha Mainnet',
    nativeCurrency: {
        name: 'BTC',
        symbol: 'BTC',
        decimals: 18,
    },
    rpcUrls: {
        default: { http: ['https://alpha-rpc-node-http.svmscan.io'] },
    },
    blockExplorers: {
        default: {
            name: 'blockscout',
            url: 'https://svmscan.io',
            apiUrl: 'https://svmscan.io/api',
        },
    },
});
//# sourceMappingURL=satoshivm.js.map