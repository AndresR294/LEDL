import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const zilliqa = /*#__PURE__*/ defineChain({
    id: 32769,
    name: 'Zilliqa',
    network: 'zilliqa',
    nativeCurrency: { name: 'Zilliqa', symbol: 'ZIL', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://api.zilliqa.com'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Ethernal',
            url: 'https://evmx.zilliqa.com',
        },
    },
    testnet: false,
});
//# sourceMappingURL=zilliqa.js.map