import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const btrTestnet = /*#__PURE__*/ defineChain({
    id: 200810,
    name: 'Bitlayer Testnet',
    nativeCurrency: {
        name: 'Bitcoin',
        symbol: 'BTC',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://testnet-rpc.bitlayer.org'],
            webSocket: [
                'wss://testnet-ws.bitlayer.org',
                'wss://testnet-ws.bitlayer-rpc.com',
            ],
        },
    },
    blockExplorers: {
        default: {
            name: 'Bitlayer(BTR) Scan',
            url: 'https://testnet.btrscan.com',
        },
    },
    testnet: true,
});
//# sourceMappingURL=btrTestnet.js.map