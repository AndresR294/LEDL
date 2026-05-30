import { defineChain } from '/data/data/com.termux/files/home/Cerebro_Operativo_LEDL/07_TRANS_DATA/node_modules/viem/_cjs/utils/chain/defineChain.js';
export const silicon = /*#__PURE__*/ defineChain({
    id: 2355,
    name: 'Silicon zkEVM',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.silicon.network',
                'https://silicon-mainnet.nodeinfra.com',
            ],
        },
    },
    blockExplorers: {
        default: {
            name: 'SiliconScope',
            url: 'https://scope.silicon.network',
        },
    },
});
//# sourceMappingURL=silicon.js.map