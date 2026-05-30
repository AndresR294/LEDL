import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const subtensorEvm = /*#__PURE__*/ defineChain({
    id: 964,
    name: 'Subtensor EVM',
    nativeCurrency: {
        decimals: 18,
        name: 'TAO',
        symbol: 'TAO',
    },
    rpcUrls: {
        default: {
            http: ['https://lite.chain.opentensor.ai'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Taostats EVM Explorer',
            url: 'https://evm.taostats.io',
            apiUrl: 'https://evm.taostats.io/api',
        },
    },
    testnet: false,
});
//# sourceMappingURL=subtensorEvm.js.map