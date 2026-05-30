import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const gatechain = /*#__PURE__*/ defineChain({
    id: 86,
    name: 'GateChain Mainnet',
    nativeCurrency: { name: 'GateChainToken', symbol: 'GT', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://evm.nodeinfo.cc'],
            webSocket: ['wss://evm-ws.gatenode.cc'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Gate Scan',
            url: 'https://www.gatescan.org',
            apiUrl: 'https://gatescan.org/api',
        },
    },
    testnet: false,
});
//# sourceMappingURL=gatechain.js.map