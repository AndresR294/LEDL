import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const edgelessTestnet = /*#__PURE__*/ defineChain({
    id: 202,
    name: 'Edgeless Testnet',
    nativeCurrency: {
        name: 'Edgeless Wrapped ETH',
        symbol: 'EwETH',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://edgeless-testnet.rpc.caldera.xyz/http'],
            webSocket: ['wss://edgeless-testnet.rpc.caldera.xyz/ws'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Edgeless Testnet Explorer',
            url: 'https://testnet.explorer.edgeless.network',
        },
    },
    testnet: true,
});
//# sourceMappingURL=edgelessTestnet.js.map